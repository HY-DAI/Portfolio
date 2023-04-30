import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlipcardComponent } from './components/flipcard/flipcard.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { InfohoverComponent } from './components/infohover/infohover.component';
import { ArtpageComponent } from './pages/artpage/artpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorkpageComponent } from './pages/workpage/workpage.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'artpage', component: ArtpageComponent },
  { path: 'workpage', component: WorkpageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FlipcardComponent,
    CarrouselComponent,
    InfohoverComponent,
    ArtpageComponent,
    HomepageComponent,
    WorkpageComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
