import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    localStorage.setItem('brand', JSON.stringify({wrestler: 'Carmelo Hayes', titles: 2}));
    localStorage.getItem('brand');
    console.log(JSON.parse(localStorage.getItem('brand') || '{}'));    
  }

  nameList = {
      fullName: 'Bron Breaker',
      brand: 'NXT'
    };

  changeBrand() {
    console.log('Changing Brand!');
    // this.nameList = {
    //   fullName: 'Grayson Waller',
    //   brand: 'SmackDown'
    // };
    this.nameList.brand = 'RAW';
  }

  changeKey(event: any) {
    console.log('changeKey', event.target.value);
  }

  

}
