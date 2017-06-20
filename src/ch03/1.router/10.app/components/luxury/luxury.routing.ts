import { Routes, RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

const routes: Routes = [
  { path: '', component: LuxuryComponent }
];

export const luxuryRouting = RouterModule.forChild(routes);
