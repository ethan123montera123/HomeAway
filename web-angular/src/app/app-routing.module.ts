import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AddPropertyComponent } from "./add-property/add-property.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path:'login',
      component: LoginComponent
  },
  {
      path:'register',
      component: RegisterComponent
  },
  {
      path:'add-property',
      component: AddPropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
