import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LandingComponent} from './app/landing/landing.component';
import{DashboardComponent} from './app/dashboard/dashboard.component';
const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'dashboard',component:DashboardComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
