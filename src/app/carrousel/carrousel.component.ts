import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {
  
  index:number=0;
  size: number=0;
  @Input() backgroundImageURLs: string[] = [""];
  @Input() titles: string[] = [""];
  @Input() pageRelatedURLs: string[] = [""];

  ngOnInit() {
    this.size =this.backgroundImageURLs.length;
  }

  setImgIndex(idx: number): void {
    this.index = idx;
  };
  
  previousImg(): void {
    if(this.index>0) this.index--; 
    else this.index=this.size-1;
  };
  nextImg(): void {
    if(this.index<this.size-1) this.index++; 
    else this.index=0;
  };
}
