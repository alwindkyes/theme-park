import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'moment/min/locales';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public commonService: CommonService) { }

  date = new FormControl();
  no_of_tickets = new FormControl(0);
  newDate = new Date();
  currentDate: any;

  ngOnInit(): void {
    moment.locale('en');
    this.convertDate();
  }

  parks: any[] = [
    {
      city: 'Bengaluru',
      city_icon: 'https://img.icons8.com/sf-regular-filled/256/palace.png'
    },
    {
      city: 'Hyderabad',
      city_icon: 'https://img.icons8.com/material/256/swing-ride.png'
    },
    {
      city: 'Kochi',
      city_icon: 'https://img.icons8.com/material/256/ferris-wheel.png'
    },
  ];

  calendarArray: any[] = [];

  toaster: boolean = false;
  toasterMessage: any;

  initializeFormGroup() {
    this.bookingForm = this.formBuilder.group({
      visit_location: new FormControl(),
      visit_date: new FormControl(),
      ticket: new FormControl(),
      total_ticket_amount: new FormControl(),
      tax_amount: new FormControl(),
      discount_amount: new FormControl(),
      grand_total: new FormControl(),
    })
  }

  onSelectedCity(park: any) {
    this.commonService.selectedCity = park;
  }

  onSelectedDate(date: any) {
    this.commonService.selectedDate = date.date;
  }

  onDatepicker() {
    this.commonService.selectedDate = moment(this.date.value).format('YYYY-M-DD');
  }

  convertDate() {
    this.currentDate = this.newDate.getFullYear() + "-" + (this.newDate.getMonth() + 1) + "-" + this.newDate.getDate();
    this.calendar();
  }

  calendar() {
    this.calendarArray[0] = {
      date: this.newDate.getFullYear() + "-" + (this.newDate.getMonth() + 1) + "-" + (this.newDate.getDate()).toString(),
      day: moment(this.newDate.setDate(this.newDate.getDate())).format('dddd')
    };
    for (let i = 1; i <= this.newDate.getDate(); i++) {
      this.calendarArray[i] = {
        date: this.newDate.getFullYear() + "-" + (this.newDate.getMonth() + 1) + "-" + (this.newDate.getDate() + 1).toString(),
        day: moment(this.newDate.setDate(this.newDate.getDate() + 1)).format('dddd')
      };
    };
  }

  initToaster(message: any) {
    this.toasterMessage = message;
    this.toaster = true;
    setTimeout(() => {
      this.toaster = false;
    }, 3000);
  }

  toBilling() {
    this.router.navigateByUrl('/billing');
  }

  increaseTicket(ticket: any) {
    if (ticket.ticket_title === 'Adult') {
      let adult = this.commonService.adult.value;
      if (this.commonService.totalTicket < 20) {
        adult++;
        this.commonService.adult.patchValue(adult)
      } else {
        this.initToaster('You can only Book 20 Tickets!');
      }
    } else if (ticket.ticket_title === 'Child') {
      let child = this.commonService.child.value;
      if (this.commonService.totalTicket < 20) {
        child++;
        this.commonService.child.patchValue(child)
      } else {
        this.initToaster('You can only Book 20 Tickets!');
      }
    } else if (ticket.ticket_title === 'Senior Citizen') {
      let senior_citizen = this.commonService.senior_citizen.value;
      if (this.commonService.totalTicket < 20) {
        senior_citizen++;
        this.commonService.senior_citizen.patchValue(senior_citizen)
      } else {
        this.initToaster('You can only Book 20 Tickets!');
      }
    } else if (ticket.ticket_title === 'Adult Fast Track') {
      let adult_fast_track = this.commonService.adult_fast_track.value;
      if (this.commonService.totalTicket < 20) {
        adult_fast_track++;
        this.commonService.adult_fast_track.patchValue(adult_fast_track)
      } else {
        this.initToaster('You can only Book 20 Tickets!');
      }
    } else if (ticket.ticket_title === 'Child Fast Track') {
      let child_fast_track = this.commonService.child_fast_track.value;
      if (this.commonService.totalTicket < 20) {
        child_fast_track++;
        this.commonService.child_fast_track.patchValue(child_fast_track)
      } else {
        this.initToaster('You can only Book 20 Tickets!');
      }
    } else if (ticket.ticket_title === 'Special Ticket') {
      let special_ticket = this.commonService.special_ticket.value;
      if (this.commonService.totalTicket < 20) {
        special_ticket++;
        this.commonService.special_ticket.patchValue(special_ticket)
      } else {
        this.initToaster('You can only Book 20 Tickets!');
      }
    }
    this.commonService.totalTicket = this.commonService.adult.value + this.commonService.child.value + this.commonService.senior_citizen.value + this.commonService.adult_fast_track.value + this.commonService.child_fast_track.value + this.commonService.special_ticket.value;
  }


  decreaseTicket(ticket: any) {
    if (ticket.ticket_title === 'Adult') {
      let adult = this.commonService.adult.value;
      if (this.commonService.totalTicket > 0 && adult > 0) {
        adult--;
        this.commonService.totalTicket--;
        this.commonService.adult.patchValue(adult)
      } else {
        this.initToaster('You can not Decrease 0!');
      }
    } else if (ticket.ticket_title === 'Child') {
      let child = this.commonService.child.value;
      if (this.commonService.totalTicket > 0 && child > 0) {
        child--;
        this.commonService.totalTicket--;
        this.commonService.child.patchValue(child)
      } else {
        this.initToaster('You can not Decrease 0!');
      }
    } else if (ticket.ticket_title === 'Senior Citizen') {
      let senior_citizen = this.commonService.senior_citizen.value;
      if (this.commonService.totalTicket > 0 && senior_citizen > 0) {
        senior_citizen--;
        this.commonService.totalTicket--;
        this.commonService.senior_citizen.patchValue(senior_citizen)
      } else {
        this.initToaster('You can not Decrease 0!');
      }
    } else if (ticket.ticket_title === 'Adult Fast Track') {
      let adult_fast_track = this.commonService.adult_fast_track.value;
      if (this.commonService.totalTicket > 0 && adult_fast_track > 0) {
        adult_fast_track--;
        this.commonService.totalTicket--;
        this.commonService.adult_fast_track.patchValue(adult_fast_track)
      } else {
        this.initToaster('You can not Decrease 0!');
      }
    } else if (ticket.ticket_title === 'Child Fast Track') {
      let child_fast_track = this.commonService.child_fast_track.value;
      if (this.commonService.totalTicket > 0 && child_fast_track > 0) {
        child_fast_track--;
        this.commonService.totalTicket--;
        this.commonService.child_fast_track.patchValue(child_fast_track)
      } else {
        this.initToaster('You can not Decrease 0!');
      }
    } else if (ticket.ticket_title === 'Special Ticket') {
      let special_ticket = this.commonService.special_ticket.value;
      if (this.commonService.totalTicket > 0 && special_ticket > 0) {
        special_ticket--;
        this.commonService.totalTicket--;
        this.commonService.special_ticket.patchValue(special_ticket)
      } else {
        this.initToaster('You can not Decrease 0!');
      }
    }
  }
}
