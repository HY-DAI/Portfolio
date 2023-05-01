import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  animations: [
    trigger('slide_left', [
      transition(':leave', [
        animate('1s', style({ color: 'red', opacity: 50 }))
      ]),
    ],
  )]
})

export class CarrouselComponent implements OnInit {
  
  index:number=0;
  size: number=0;
  @Input() backgroundImageURLs: string[] = [""];
  @Input() pageRelatedURLs: string[] = [""];
  @Input() titles: string[] = [""];
  @Input() secPerImage: number = 3;
  
  interval: any;
  timeLeft: number = 3;
  animate: boolean = false;

  ngOnInit() {
    this.size =this.backgroundImageURLs.length;
    this.startTimer();
  }

  setImgIndex(idx: number): void {
    this.animate = true;
    this.index = idx;
    this.timeLeft = this.secPerImage;
  };
  
  previousImg(): void {
    this.animate = true;
    this.timeLeft = this.secPerImage;
    if(this.index>0) this.index--; 
    else this.index=this.size-1;
  };

  nextImg(): void {
    this.animate = true;
    this.timeLeft = this.secPerImage;
    if(this.index<this.size-1) this.index++; 
    else this.index=0;
  };

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.animate = false;
        this.timeLeft--;
      } else {
        this.nextImg();
        this.timeLeft = this.secPerImage;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
