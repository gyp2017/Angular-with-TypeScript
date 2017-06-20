import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { luxuryRouting } from './luxury.routing';

@NgModule({
  imports: [
    CommonModule,
    luxuryRouting
  ],
  declarations: [LuxuryComponent]
})
export default class LuxuryModule { }
