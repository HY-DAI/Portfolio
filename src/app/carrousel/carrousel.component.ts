import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {
  @Input() size: number=0;
  @Input() backgroundImageURLs: string[] = [""];
  @Input() titles: string[] = [""];
}
