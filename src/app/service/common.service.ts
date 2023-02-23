import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
  }

  OnInit() {
  }

  adult: any = new FormControl(0);
  child: any = new FormControl(0);
  senior_citizen: any = new FormControl(0);
  adult_fast_track: any = new FormControl(0);
  child_fast_track: any = new FormControl(0);
  special_ticket: any = new FormControl(0);

  selectedCity: any;
  selectedDate: any;
  totalTicket: number = 0;

  tickets: any[] = [
    {
      ticket_image: 'https://media.istockphoto.com/id/1266364936/photo/family-has-fun-at-outdoor-carnival-setting.jpg?s=612x612&w=0&k=20&c=n8UpAe4DQnjiWgsfDfZORU32Y--ilPAwHJ6JnMP08T0=',
      ticket_title: 'Adult',
      price: '931.36',
      control: this.adult,
    },
    {
      ticket_image: 'https://media.istockphoto.com/id/950279234/photo/mixed-race-little-daughter-having-fun-with-mother-on-carousel-ride.jpg?s=612x612&w=0&k=20&c=5LhNumCGxFYgZWvLJdYAjhUQGzsJ5ra9rYqRawF60sg=',
      ticket_title: 'Child',
      price: '745.09',
      control: this.child,
    }, {
      ticket_image: 'https://media.istockphoto.com/id/1179332911/photo/carefree-seniors-having-fun-on-rollercoaster-at-amusement-park.jpg?s=612x612&w=0&k=20&c=96YmWe8XzHy8wyQSEX2_NmOwNrUFXezQYzQ2xg4f2_U=',
      ticket_title: 'Senior Citizen',
      price: '931.36',
      control: this.senior_citizen,
    }, {
      ticket_image: 'https://media.istockphoto.com/id/1266364936/photo/family-has-fun-at-outdoor-carnival-setting.jpg?s=612x612&w=0&k=20&c=n8UpAe4DQnjiWgsfDfZORU32Y--ilPAwHJ6JnMP08T0=',
      ticket_title: 'Adult Fast Track',
      type: 'FASTTRACK',
      price: '1862.72',
      control: this.adult_fast_track,
    }, {
      ticket_image: 'https://media.istockphoto.com/id/950279234/photo/mixed-race-little-daughter-having-fun-with-mother-on-carousel-ride.jpg?s=612x612&w=0&k=20&c=5LhNumCGxFYgZWvLJdYAjhUQGzsJ5ra9rYqRawF60sg=',
      ticket_title: 'Child Fast Track',
      type: 'FASTTRACK',
      price: '1489.84',
      control: this.child_fast_track,
    }, {
      ticket_image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/82/73/ac.jpg',
      ticket_title: 'Special Ticket',
      price: '745.09',
      control: this.special_ticket,
    }
  ];
}
