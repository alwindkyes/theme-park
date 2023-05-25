import { Component, Input, OnInit } from '@angular/core';

interface RadiusSizes {
  [key: string]: string,
  none: string,
  md: string,
  lg: string,
  full: string
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {
  ngOnInit(): void {
    console.log('imageSrc', this.imageSrc);
    console.log('radius', this.radius);
    
  }

  @Input() imageSrc: string = '';
  @Input() radius: string = '';
  @Input() objectFit: string = '';
  @Input() roundingSide: string = '';
  @Input() roundingCorners: string = '';
  @Input() width: string = '';
  @Input() height: string = '';

  radiusSizes: {[key: string]: string} = {
    none: 'rounded-none',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }

  objectFitTypes: {[key: string]: string} = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    scaleDown: 'object-scale-down'
  }

  roundingSides: any = {
    top: 'rounded-t-lg',
    right: 'rounded-r-lg',
    bottom: 'rounded-b-lg',
    left: 'rounded-l-lg',
  }

  roundingCorner: any = {
    tl: 'rounded-tl-lg',
    tr: 'rounded-tr-lg',
    br: 'rounded-br-lg',
    bl: 'rounded-bl-lg',
  }
  // width = {
  //   type: String,
  //   default: ''
  // }
  // height = {
  //   type: String,
  //   default: ''
  // }
}
