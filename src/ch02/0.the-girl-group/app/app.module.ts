import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ApplicatoinComponent from './components/application/application.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import IdolItemComponet from './components/idol-item/idol-item.component';
import SearchComponent from './components/search/search.component';

import { IdolService } from './services/idol.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ApplicatoinComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    IdolItemComponet,
    SearchComponent
  ],
  providers: [IdolService],
  bootstrap: [ApplicatoinComponent]
})
export class AppModule { }
