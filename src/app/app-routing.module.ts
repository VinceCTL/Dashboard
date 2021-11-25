import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginViewComponent} from './Views/Login/login.component';
import {RegisterComponent} from './Views/register/register-component';
import {HomeComponent} from './Views/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view/Login',
    pathMatch: 'full',
  },
  {
    path: 'view/Login',
    component: LoginViewComponent,
  },
  {
    path: 'view/Register',
    component: RegisterComponent,
  },
  {
    path: 'view/Home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    // LogExplorationModule,
    // CrawlExecutionSectionModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
