import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infohover',
  templateUrl: './infohover.component.html',
  styleUrls: ['./infohover.component.css']
})
export class InfohoverComponent {
  visible : boolean = false;
  @Input() titreBtn: string = "";
  @Input() titreContenu: string = "";
  @Input() imageURL: string = "";
  @Input() description1: string = "";
  @Input() description2: string = "";
  @Input() description3: string = "";
}
