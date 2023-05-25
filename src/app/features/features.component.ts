import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { StandAndDeliverComponent } from './stand-and-deliver/stand-and-deliver.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  starCount: number = 4.7;

  imageSrc: string = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80';
  radius: string = 'md';
  objectFit: string = '';
  roundingSide: string = 'top';
  roundingCorners: string = '';
  width: string = '50%';
  height: string = '50%';

  regularDialog: boolean = false;
  videoDialog: boolean = false;
  type: string = '';
  closeButton: string = 'text';
  youtubeUrl: string = 'https://www.youtube.com/embed/x55lAlFtXmw';

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef) {

  }

  addDynamicComponents() {
    this.container.clear();
    const dynamicRef = this.container.createComponent(DynamicComponent);
    // dynamicRef.instance.value = 'Nathan Frazer';
    dynamicRef.setInput('value', 'Axiom')

    const standAndDeliverRef = this.container.createComponent(StandAndDeliverComponent);
    standAndDeliverRef.instance.brand = 'NXT';
  }

  openDialogBox(type: string): void {
    type === 'regular' ? this.regularDialog = true : this.videoDialog = true;
  }

  closeDialogBox(type: string): void {    
    type === 'regular' ? this.regularDialog = false : this.videoDialog = false;
  }
}
