import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getWrestlersList();  
  }

  wrestlers: any = [];
  brands: any = [
    {
      brand: "RAW"
    },
  ];

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

}
