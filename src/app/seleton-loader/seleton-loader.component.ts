import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  template: `
   <div [ngStyle]="getMyStyle()" class="skelt-load loader"></div>
  `,
  styleUrls: ['./seleton-loader.component.css']
})
export class SeletonLoaderComponent implements OnInit {

  @Input() width;
  @Input() height;
  @Input() circle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getMyStyle() {
    const myStyle = {
      'width.px': this.width ? this.width : '',
      'height.px': this.height ? this.height : '',
      'border-radius': this.circle ? '50%' : ''
    };
    return myStyle;
  }

}
