import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() value: number = 0;
  totalStars: number = 5;
  // fillStars: Array<number> = [];
  // strokeStars: Array<number> = [];

  ngOnInit(): void {
    // this.rate();
  }


  // rate() {
  //   for (let i = 0; i < Math.floor(Number(this.value)); i++) {
  //     this.fillStars.push(i);
  //   }

  //   for (let i = 0; i < 5 - Math.floor(Number(this.value)); i++) {      
  //     this.strokeStars.push(i);
  //   }
  // }

}
