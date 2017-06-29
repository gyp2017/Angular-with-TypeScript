import { Routes, RouterModule } from '@angular/router';

import MainComponent from './components/main/main.component';
import IdolDetailComponent from './components/idol-detail/idol-detail.component';

const routes : Routes = [
  { path: '', component: MainComponent },
  { path: 'idols/:idolId', component: IdolDetailComponent },
];

export const routing = RouterModule.forRoot(routes);
