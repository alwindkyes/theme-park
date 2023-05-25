import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stand-and-deliver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-and-deliver.component.html',
  styleUrls: ['./stand-and-deliver.component.scss']
})
export class StandAndDeliverComponent {
  @Input() brand: string = '';

}
