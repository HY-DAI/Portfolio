import { Component } from '@angular/core';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';
import { InfohoverComponent } from 'src/app/components/infohover/infohover.component';
import { InteractiveFaceComponent } from 'src/app/components/interactive-face/interactive-face.component';
import { BackgroundTextComponent } from 'src/app/components/background-text/background-text.component';
import { ArtpageComponent } from '../artpage/artpage.component';
import { WorkpageComponent } from '../workpage/workpage.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CarrouselComponent,
    InfohoverComponent,
    InteractiveFaceComponent,
    BackgroundTextComponent,
    ArtpageComponent,
    WorkpageComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
}
