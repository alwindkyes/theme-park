import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-person-one',
  templateUrl: './person-one.component.html',
  styleUrls: ['./person-one.component.scss'],
  host: {
    '(document:click)': 'otherClick($event)',
  },
})
export class PersonOneComponent implements OnInit {
  personOne: FormControl = new FormControl();
  personOneData: any = [];
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
      console.log('res', res);
      this.personOneData = res;
    })
  }

  sendData() {
    const data = {
      chat: this.personOne.value,
      person: 1
    };
    if (this.personOne.value) {
      this.chatService.postData(data).subscribe(res => {
        console.log('res', res);
        this.personOne.patchValue('');
        this.getData();
      })
    }
  }

  editData() {
    // const apiUrl = 'http://localhost:3000/personOneChat/' + id;
    // const data = { chat: this.personOne.value }
    // this.chatService.putData(apiUrl, data).subscribe(res => {
    //   this.getData();
    // })
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

interface chat {
  chat: string
}
