import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(
    private router: Router,
    public commonService: CommonService) {

  }
  newDate = new Date();
  totalTicketAmount: any;
  grandTotalAmount: any;
  taxAmount = 300;
  coupon = new FormControl();
  couponMessage: any;
  discountAmount: number = 0;
  couponDetails: any[] = [
    {
      coupon_code: 'ADV001',
      discount_amount: '100',
      active_from: '2023-1-01',
      active_to: '2023-1-30',
    },
    {
      coupon_code: 'ADV002',
      discount_amount: '200',
      active_from: '2023-1-16',
      active_to: '2023-1-17',
    }, {
      coupon_code: 'ADV003',
      discount_amount: '150',
      active_from: '2023-1-10',
      active_to: '2023-1-17',
    }, {
      coupon_code: 'ADV004',
      discount_amount: '100',
      active_from: '2023-2-01',
      active_to: '2023-2-10',
    }, {
      coupon_code: 'ADV005',
      discount_amount: '100',
      active_from: '2023-2-06',
      active_to: '2023-2-16',
    },
  ];

  ngOnInit(): void {
    this.calculate();
  }

  toBooking() {
    this.router.navigateByUrl('/booking')
  }

  calculate() {
    console.log('city', this.commonService.selectedCity);
    console.log('Date', this.commonService.selectedDate);
    this.totalTicketAmount = this.commonService.tickets.map((element: any) => {
      return Number(element.control.value) * Number(element.price)
    });
    this.totalTicketAmount = this.totalTicketAmount.reduce((total: any, currentValue: any) => {
      return total + currentValue;
    })
    this.grandTotalAmount = this.totalTicketAmount + this.taxAmount;
    console.log('ticketAmount', this.totalTicketAmount);
  }

  applyCoupon() {
    if (this.coupon.value) {
      this.couponDetails.forEach((element: any) => {
        if (this.coupon.value === element.coupon_code) {
          if (this.commonService.selectedDate >= element.active_from && this.commonService.selectedDate <= element.active_to) {
            this.discountAmount = element.discount_amount;
            this.grandTotalAmount = this.grandTotalAmount - element.discount_amount;
          } else {
            this.couponMessage = 'Invalid Coupon!';
            setTimeout(() => {
              this.couponMessage = '';
            }, 3000);
          }
        }
      })
    }
  }
}
