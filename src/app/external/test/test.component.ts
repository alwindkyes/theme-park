import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {

  wrestlersForm!: any;
  toasterMessage: string = '';
  deletePopup: boolean = false;
  toBeDeletedId: number = 0;
  toBeEditedData: any;
  wrestlers: any = [];
  toasterArray: Array<any> = [];
  toasterCount: number = 0;
  brands: any = [
    {
      brand: "RAW"
    },
  ];
  createNew: boolean = false;
  selectedButton: string = 'add New';
  saveOrEdit: string = '';

  @Input() nameList: any;

  constructor(private ref: ChangeDetectorRef, private apiService: ApiService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.getParks();
    this.getWrestlersList();
    this.wrestlersForm = this.formBuilder.group({
      rank: new FormControl('', [Validators.required]),
      wrestler_name: new FormControl('', [Validators.required]),
      brand: new FormControl()
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('createNew', this.createNew);

    if (this.createNew) {
      this.disableScroll();
      console.log('YES');
    } else {
      this.enableScroll();
    }
  }

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
      this.wrestlersForm.reset();
      this.toaster('Created Successfully !');
    });
  }

  editWrestlersList() {
    const updatedData = { ...this.wrestlersForm.value };
    this.apiService.editData(updatedData, this.toBeEditedData.id).subscribe(res => {
      this.getWrestlersList();
      this.createNew = false;
      this.wrestlersForm.reset();
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

  enableScroll(): void {
    document.body.style.setProperty('overflow', 'auto');
  }

  disableScroll(): void {
    document.body.style.setProperty('overflow', 'hidden');
  }

  twenty: any = 10;
  top: any = 'top-[20px]';

  toaster(value: string) {
    this.twenty = this.twenty + 10;
    this.top = 'top-[' + this.twenty.toString() + 'px]';
    console.log('twenty', this.twenty);
    console.log('top', this.top, typeof (this.top));

    this.toasterMessage = value;
    this.toasterArray.push(this.toasterCount);
    this.toasterCount++;

    // setTimeout(() => {
    //   this.toasterArray.pop();
    //   this.toasterCount--;
    //   // this.toasterMessage = '';
    //   this.ref.markForCheck();
    // }, 3000);
  }


  closeToaster(index: number) {
    console.log('index', index);
    this.toasterArray.splice(index, 1);
  }

  parks: any = [];

  getParks() {
    const url = "https://wonderlaapi.hakunamatata.io/crud/park/m_park?jsonapi=true&filters={'field':'is_enabled','operator':'equal','value':'false}&fields[m_park]=park_code,park_name,address,max_crowd,is_enabled,icon_url";
    return this.http.get(url).subscribe({
      next: (res) => {
        let parks: any = [];
        parks = res;
        this.ref.markForCheck();
        parks.data.forEach((element: any) => {
          this.parks.push(element.attributes.park_name);
        });
        console.log('parks', this.parks);
      },
      error: () => {

      }
    });
  }
}
