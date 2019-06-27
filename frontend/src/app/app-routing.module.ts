import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { RegisterComponent } from './components/layout/register/register.component';
import { ModalComponent } from './modal/modal.component';
import { InsertProductComponent } from './components/master/product/insert-product/insert-product.component';
import { ListProductComponent } from './components/master/product/list-product/list-product.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AfterLoginService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] },
  { path: 'request-password-reset', component: RequestResetComponent, canActivate: [BeforeLoginService] },
  { path: 'response-password-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService] },
  {
    path: 'products', children: [
      { path: '', component: ListProductComponent, canActivate: [AfterLoginService] },
      { path: 'add-product', component: InsertProductComponent, canActivate: [AfterLoginService] },
      { path: 'edit-product/:id', component: InsertProductComponent, canActivate: [AfterLoginService] },
    ]
  },
  { path: 'modal', component: ModalComponent },
  { path: '**', redirectTo: '/login', canActivate: [BeforeLoginService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
