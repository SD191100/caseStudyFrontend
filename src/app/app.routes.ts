import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductsComponent } from './screens/products/products.component';
import { CartComponent } from './screens/cart/cart.component';
import { UserProfileComponent } from './screens/user-profile/user-profile.component';
import { ProductBrowsingComponent } from './screens/product-details/product-details.component';
<<<<<<< HEAD
=======
import { CheckoutComponent } from './screens/checkout/checkout.component';
>>>>>>> 5716a72afec564232f84becf2af47aed00c88a4d

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
  { path: 'products', component: ProductBrowsingComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: UserProfileComponent},
<<<<<<< HEAD
  { path: 'productBrowsing' , component: ProductBrowsingComponent}
=======
  {
    path: 'checkout', component: CheckoutComponent
  },
>>>>>>> 5716a72afec564232f84becf2af47aed00c88a4d
];
