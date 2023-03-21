import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-person-two',
  templateUrl: './person-two.component.html',
  styleUrls: ['./person-two.component.scss'],
  // host: {
  //   '(document:click)': 'otherClick($event)',
  // },
})
export class PersonTwoComponent implements OnInit {
  personTwo: FormControl = new FormControl();
  personTwoData: any = [];
  moreDetails: number = 0;
  @HostListener('document:click', ['$event']) onDocumentClick() {
    this.moreDetails = 0;
  }

  constructor(private chatService: ChatService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.chatService.getData().subscribe(res => {
      this.personTwoData = res;
    })
  }

  sendData() {
    const data = {
      chat: this.personTwo.value,
      person: 2
    };
    if (this.personTwo.value) {
      this.chatService.postData(data).subscribe(res => {
        this.personTwo.patchValue('');
        this.getData();
      })
    }
    console.log('this.chatService.personOneData', this.personTwoData);
  }

  more(id: number) {
    this.moreDetails = id;
  }

  otherClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.moreDetails = 0;
    }
  }
}
