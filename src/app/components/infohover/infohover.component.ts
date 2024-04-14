import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infohover',
  standalone: true,
  imports: [CommonModule],
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
