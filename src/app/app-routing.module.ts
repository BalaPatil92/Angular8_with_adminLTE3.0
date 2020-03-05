import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import {MyProfileComponent} from './pages/my-profile/my-profile.component';
import { DateWiseComponent } from './pages/report/date-wise/date-wise.component';
import {SaleComponent} from './pages/master/sale/sale.component';
import { HsnMasterComponent } from './pages/master/hsn-master/hsn-master.component';
import { ItemMasterComponent } from './pages/master/item-master/item-master.component';
import { CategoryMasterComponent } from './pages/master/category-master/category-master.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:DashboardComponent,
  //   canActivate: [AuthGuard]
  // },
  
  // { path: '**', redirectTo: ''},
  
  {
    path:'login',
    component:LoginComponent,
    data:{
      title:'Login'
    }
  },
  
  {
    path:'registration',
    component:RegistrationComponent,
    data:{
      title:'registration'
    }
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    // canActivate: [AuthGuard],
    data:{
      title:'Dashboard'
    }
  },
  {
    path:'myProfile',
    component:MyProfileComponent,
    data:{
      title:'My Profile'
    }
  },
  {
    path:'changePassword',
    component:ChangePasswordComponent,
    data:{
      title:'Change password'
    }
  },
  {
    path:'report/date-wise',
    component:DateWiseComponent,
    data:{
      title:'Date Wise Report'
    }
  },
  {
    path:'master/sale',
    component:SaleComponent,
    data:{
      title:'Sale'
    }
  },
  {
    path:'master/hsn-master',
    component:HsnMasterComponent,
    data:{
      title:'HSN Master'
    }
  },
  {
    path:'master/category-master',
    component:CategoryMasterComponent,
    data:{
      title:'Category Master'
    }
  },
  {
    path:'master/item-master',
    component:ItemMasterComponent,
    data:{
      title:'Item Master'
    }
  }
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
