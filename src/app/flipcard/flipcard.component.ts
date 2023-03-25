import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.css']
})
export class FlipcardComponent {
  @Input() name: string = "";
  @Input() presentation: string = "";
  @Input() hobby: string = "";
  @Input() backgroundImageURL: string = "";
  @Input() linkedinURL: string = "";
  @Input() imageURL: string = "";
  @Input() licenseURL: string = "";
}
