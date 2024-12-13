import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { CategoriesComponent } from './screens/categories/categories.component';
import { ProductsComponent } from './screens/products/products.component';
import { CartComponent } from './screens/cart/cart.component';
import { UserProfileComponent } from './screens/user-profile/user-profile.component';
import { ProductBrowsingComponent } from './screens/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'categories/:id/:name', component: CategoriesComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: UserProfileComponent},
  { path: 'productBrowsing' , component: ProductBrowsingComponent}
];
