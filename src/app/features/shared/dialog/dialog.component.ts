import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnChanges {

  @Input() openDialog: boolean = false;
  @Input() youtubeUrl: string = '';
  @Input() type: string = '';
  @Input() closeButton: string = '';
  @Output() closeDialog: EventEmitter<string> = new EventEmitter();
  safeYoutubeUrl!: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.initiaize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initiaize();
  }

  initiaize(): void {
    if (this.openDialog) {
      this.disableScroll();
    }
    this.safeYoutubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
  }


  closeDialogBox(): void {
    this.closeDialog.emit(this.type);
    this.enableScroll();
  }

  enableScroll(): void {
    document.body.style.setProperty('overflow', 'auto');
  }

  disableScroll(): void {
    document.body.style.setProperty('overflow', 'hidden');
  }

}
