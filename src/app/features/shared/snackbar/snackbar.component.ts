import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  @Input() alertMessage: string = '';
  @Output() clear: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.clear.emit();
    }, 3000);
  }
}
