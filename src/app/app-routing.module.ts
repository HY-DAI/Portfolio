import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArtpageComponent } from './pages/artpage/artpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorkpageComponent } from './pages/workpage/workpage.component';

import { FlipcardComponent } from './components/flipcard/flipcard.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { InfohoverComponent } from './components/infohover/infohover.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'artpage', component: ArtpageComponent },
  { path: 'workpage', component: WorkpageComponent },
  { path: '**', component: HomepageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FlipcardComponent,
    CarrouselComponent,
    InfohoverComponent,
    ArtpageComponent,
    HomepageComponent,
    WorkpageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
