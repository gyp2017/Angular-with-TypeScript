import { Routes, RouterModule } from '@angular/router';
import { LuxuryComponent } from './components/luxury/luxury.component';

const routes: Routes = [
  { path: 'luxury', component: LuxuryComponent }
];

export const luxuryRouting = RouterModule.forChild(routes);
