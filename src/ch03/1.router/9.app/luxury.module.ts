import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './components/luxury/luxury.component';
import { luxuryRouting } from './luxury.routing';

@NgModule({
  imports: [
    CommonModule,
    luxuryRouting
  ],
  declarations: [LuxuryComponent]
})
export class LuxuryModule { }
