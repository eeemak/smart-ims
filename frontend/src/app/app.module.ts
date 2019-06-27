import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/layout/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProductComponent } from './components/master/product/product.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { RegisterComponent } from './components/layout/register/register.component';
import { DataTablesModule } from 'angular-datatables';
import { FlxUiDatatableModule, FlxUiDataTable } from 'flx-ui-datatable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ListProductComponent } from './components/master/product/list-product/list-product.component';
import { InsertProductComponent } from './components/master/product/insert-product/insert-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProductComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    ModalComponent,
    ListProductComponent,
    InsertProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    DataTablesModule,
    FlxUiDatatableModule,
    NgbModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService, FlxUiDataTable],
  bootstrap: [AppComponent]
})
export class AppModule { }
