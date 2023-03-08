import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  wrestlersForm!: any;

  constructor(private ref: ChangeDetectorRef, private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getWrestlersList();
    this.wrestlersForm = this.formBuilder.group({
      rank: new FormControl('', [Validators.required]),
      wrestler_name: new FormControl('', [Validators.required]),
      brand: new FormControl()
    })
  }
  toasterMessage: string = '';
  deletePopup: boolean = false;
  toBeDeletedId: number = 0;
  toBeEditedData: any;
  wrestlers: any = [];
  brands: any = [
    {
      brand: "RAW"
    },
  ];
  createNew: boolean = false;
  selectedButton: string = 'add New';
  saveOrEdit: string = '';

  @Input() nameList: any;

  detect() {
    console.log('DETECTING TEST Component Change');
    console.log('nameList', this.nameList);
  }

  getWrestlersList() {
    this.apiService.getData().subscribe(res => {
      this.wrestlers = res;
      this.ref.markForCheck();
    });
  }

  saveWrestlersList() {
    const data = { ...this.wrestlersForm.value };
    this.apiService.postData(data).subscribe(res => {
      this.getWrestlersList();
      this.createNew = false;
      this.toaster('Created Successfully !');
    });
  }

  editWrestlersList() {
    const updatedData = { ...this.wrestlersForm.value };
    this.apiService.editData(updatedData, this.toBeEditedData.id).subscribe(res => {
      this.getWrestlersList();
      this.createNew = false;
      this.toaster('Edited Successfully !');
    })
  }

  deleteWrestlersList() {
    this.apiService.deleteData(this.toBeDeletedId).subscribe(res => {
      this.getWrestlersList();
      this.deletePopup = false;
      this.toaster('Deleted Successfully !');
    });
  }

  editSelectedData(data: any) {
    this.toBeEditedData = data;
    this.createNew = true;
    this.saveOrEdit = 'Edit';
    this.wrestlersForm.patchValue({
      rank: data.rank,
      wrestler_name: data.wrestler_name,
      brand: data.brand,
    });
  }

  saveOrEditWrestlersList() {
    if (this.wrestlersForm.valid) {
      if (this.saveOrEdit === 'Save') {
        this.saveWrestlersList();
      } else {
        this.editWrestlersList();
      }
      this.wrestlersForm.reset();
    } else {
      this.toaster('Fields can not be Empty !');
    }
  }
  addNew() {
    this.createNew = true;
    this.saveOrEdit = 'Save';
  }

  cancelCreateNew() {
    this.createNew = false;
    this.wrestlersForm.reset();
  }

  confirmDelete(id: number) {
    this.toBeDeletedId = id;
    this.deletePopup = true;
  }

  cancelDelete() {
    this.deletePopup = false;
  }

  toaster(value: string) {
    this.toasterMessage = value;
    setTimeout(() => {
      this.toasterMessage = '';
      this.ref.markForCheck();
    }, 3000);
  }

  closeToaster() {
    this.toasterMessage = '';
  }
}
