import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DateWiseComponent } from './pages/report/date-wise/date-wise.component';
import { SaleComponent } from './pages/master/sale/sale.component';
import { HsnMasterComponent } from './pages/master/hsn-master/hsn-master.component';
import { ItemMasterComponent } from './pages/master/item-master/item-master.component';
import { CategoryMasterComponent } from './pages/master/category-master/category-master.component';
import {NgxPrintModule} from 'ngx-print'; //npm install ngx-print

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
    MyProfileComponent,
    DateWiseComponent,
    SaleComponent,
    HsnMasterComponent,
    ItemMasterComponent,
    CategoryMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
