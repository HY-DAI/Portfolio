import { Component } from '@angular/core';
import { FlipcardComponent } from 'src/app/components/flipcard/flipcard.component';

@Component({
  selector: 'app-workpage',
  standalone: true,
  imports: [FlipcardComponent],
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.css']
})
export class WorkpageComponent {

}
