import { Component } from '@angular/core';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';
import { InfohoverComponent } from 'src/app/components/infohover/infohover.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CarrouselComponent,
    InfohoverComponent,],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}
