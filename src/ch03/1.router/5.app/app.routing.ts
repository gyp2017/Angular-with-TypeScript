import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailParamDataComponent } from './components/product-param-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailParamDataComponent, data: [{ isProd: true }] }
];

export const routing = RouterModule.forRoot(routes);
