import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlipcardComponent } from './components/flipcard/flipcard.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { InfohoverComponent } from './components/infohover/infohover.component';
import { ArtpageComponent } from './artpage/artpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'artpage', component: ArtpageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FlipcardComponent,
    CarrouselComponent,
    InfohoverComponent,
    ArtpageComponent,
    HomepageComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
