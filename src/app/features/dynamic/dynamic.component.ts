import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnChanges {
  @Input() value: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes Occured');
  }
}
