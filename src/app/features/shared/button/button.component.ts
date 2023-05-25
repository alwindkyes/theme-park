import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() size: string = '';
  @Input() shade: string = '';
  @Input() animation: string = 'Circle';
  @Input() buttonName: string = '';

}
