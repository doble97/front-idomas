import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { DashboardComponent } from './decks/pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', loadChildren:()=>import('./decks/decks.module').then(m=>m.DecksModule)},
  {path: '**', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
