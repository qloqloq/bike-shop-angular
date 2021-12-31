import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountActivationComponent } from './auth/account-activation/account-activation.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderComponent } from './order/order.component';
import { ProductMgmtComponent } from './admin/product-mgmt/product-mgmt.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductSaveComponent } from './admin/product-save/product-save.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: "product/:id",
    component: ProductPageComponent
  },
  {
    path: "admin/products",
    component: ProductMgmtComponent
  },
  {
    path: "admin/products/add",
    component: ProductSaveComponent
  },
  {
    path: "admin/products/edit/:id",
    component: ProductEditComponent
  },
  {
    path: "category/:name",
    component: CategoryProductsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "orders",
    component: OrderComponent
  },
  {
    path: "order-form",
    component: OrderFormComponent
  },

  {
    path: "my-profile",
    component: MyProfileComponent
  },
  {
    path: "account-verification",
    component: AccountActivationComponent
  },
  {
    path:"admin/products/save",
    component: ProductSaveComponent
  },
  {
    path:
      "**",
    component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
