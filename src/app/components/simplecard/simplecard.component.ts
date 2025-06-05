import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-simplecard',
  standalone: true,
  templateUrl: './simplecard.component.html',
  styleUrls: ['./simplecard.component.css']
})
export class SimplecardComponent {
  @Input() cardName: string = "";
  @Input() presentation: string = "";
  @Input() backgroundImageURL: string = "";
  @Input() link: string = "";
}
