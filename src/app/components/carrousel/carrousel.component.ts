import { Component, Input, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  
  index:number=0;
  size: number=0;
  @Input() backgroundImageURLs: string[] = [""];
  @Input() titles: string[] = [""];
  @Input() pageRelatedURLs: string[] = [""];
  @Input() secPerImage: number = 3;
  
  interval: any;
  timeLeft: number = 3;

  // constructor(private router: Router) {}

  ngOnInit() {
    this.size =this.backgroundImageURLs.length;
    this.startTimer();
  }
  
  //goToPage(){
  //  this.router.navigate(['/artpage']);  // define your component where you want to go
  //}

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

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
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
