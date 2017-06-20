import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductDetailComponent, canActivate: [LoginGuard] }
];

export const routing = RouterModule.forRoot(routes);
