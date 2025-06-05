import { Component } from '@angular/core';
import { FlipcardComponent } from 'src/app/components/flipcard/flipcard.component';
import { SimplecardComponent } from 'src/app/components/simplecard/simplecard.component';

@Component({
  selector: 'app-workpage',
  standalone: true,
  imports: [FlipcardComponent, SimplecardComponent],
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.css']
})
export class WorkpageComponent {

}
