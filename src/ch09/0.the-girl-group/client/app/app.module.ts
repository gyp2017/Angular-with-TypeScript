import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import ApplicatoinComponent from './components/application/application.component';
import NavbarComponent from './components/navbar/navbar.component';
import FooterComponent from './components/footer/footer.component';
import SearchComponent from './components/search/search.component';
import MainComponent from './components/main/main.component';
import CarouselComponent from './components/carousel/carousel.component';
import IdolItemComponet from './components/idol-item/idol-item.component';
import IdolDetailComponent from './components/idol-detail/idol-detail.component';
import StarsComponent from './components/stars/stars.component';

import { routing } from './app.routing';
import { ONLINE_IDOL_SERVICES } from './services/services';
import { FilterPipe } from './components/pipes/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ApplicatoinComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    MainComponent,
    CarouselComponent,
    IdolDetailComponent,
    IdolItemComponet,
    StarsComponent,
    FilterPipe
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ONLINE_IDOL_SERVICES
  ],
  bootstrap: [ApplicatoinComponent]
})
export class AppModule { }
