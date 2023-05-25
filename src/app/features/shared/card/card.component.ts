import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger(
      'slideInOutAnimation',
      [
        transition(
          ':enter',
          [
            style({
              transform: 'translateX(-100%)'
            }),
            animate('0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              style({
                transform: 'translateX(0px)'
              }))
          ]
        ),
        transition(
          ':leave',
          [
            style({
              transform: 'translateX(0px)'
            }),
            animate('0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              style({
                transform: 'translateX(-100%)'
              })),
            query('@*', animateChild()),
            query(':leave', [animate('1s', style({}))]),
          ]
        )
      ]
    ),
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          transform: 'translateX(-100%)'
        }),
      ),
      state(
        "closed",
        style({
          transform: 'translateX(0px)'
        }),
      ),
      transition("open => closed", [animate('0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        style({
          transform: 'translateX(0px)'
        }))]),
      transition("closed => open", [animate('0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        style({
          transform: 'translateX(-100%)'
        }))])
    ]),
    trigger("backdrop", [
      state(
        "open",
        style({
          opacity: 1,
          // backgroundColor: 'green'

        }),
      ),
      state(
        "closed",
        style({
          opacity: 0,
          // backgroundColor: 'red',
          // display: 'none'
          visibility: 'hidden'
        }),
      ),
      transition("open => closed", [animate('0.3s linear')]),
      transition("closed => open", [animate('0.3s linear')])
    ])
  ]
})
export class CardComponent implements OnInit {

  titles: string[] = [];
  totalTitles: string[] = []
  addOn: number = 0;
  pages: number[] = [];
  pageField: FormControl = new FormControl();
  noOfItems: any[] = [5, 10, 25, 50];
  currentNoOfItems: number = 10;
  // selectItem: FormControl<any> = new FormControl();
  @ViewChild('selectItem') selectItem: any;

  constructor(private httpCient: HttpClient) {

  }

  ngOnInit(): void {
    this.getNames();
  }

  ngAfterViewInit(): void {
    (document.getElementsByName('selectItem') as any)[0].value = 5;
    console.log('selectItem', ((document.getElementsByName('selectItem') as any)[0].value ));
  }

  getNames(): void {
    this.httpCient.get('https://dummyjson.com/todos').subscribe({
      next: (response: any) => {
        response.todos.forEach((element: any) => {
          this.totalTitles.push(element.todo);
        });
        this.nextList();
        this.getNoOfPages();
      },
      error: () => {
      }
    })
  }

  nextList(): void {
    // this.titles = [];
    // let limitedTitles = [];
    // console.log(this.addOn, this.addOn + this.currentNoOfItems);
    // limitedTitles = this.totalTitles.slice(this.addOn, this.addOn + this.currentNoOfItems);
    // // this.addOn = this.addOn + this.currentNoOfItems;

    // limitedTitles.forEach((element: any) => {
    //   this.titles.push(element);
    // })
    // console.log('limitedTitles', limitedTitles);
  }

  onSelectPages(event: any): void {
    this.addOn = 0;
    console.log('selectItem', ((document.getElementsByName('selectItem') as any)[0].value ));

    this.currentNoOfItems = Number(event.target.value);
    this.nextList();
    this.getNoOfPages();
  }

  newPage(item: number): void {
    console.log('item', item);
    this.titles = [];
    let limitedTitles = [];
    let coe = this.currentNoOfItems;
    limitedTitles = this.totalTitles.slice(this.currentNoOfItems * item, this.currentNoOfItems * (item + 1));
    limitedTitles.forEach((element: any) => {
      this.titles.push(element);
    })
  }

  getNoOfPages(): void {
    this.pages = [];
    let l = this.totalTitles.length / this.currentNoOfItems;
    for (let i = 0; i < l; i++) {
      this.pages.push(i);
    }
    console.log('pages', this.pages);
  }

  show: boolean = false;

  hideAndSeek(): void {
    this.show = !this.show;
  }

  get openCloseTrigger() {
    return this.show ? "open" : "closed";
  }
}
