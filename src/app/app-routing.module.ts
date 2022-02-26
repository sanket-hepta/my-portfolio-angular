import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"sign-in",
    component:SigninComponent
  },
  {
    path:"sign-up",
    component:SignupComponent
  },
  {
    path:"signup-data",
    component:UserdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
