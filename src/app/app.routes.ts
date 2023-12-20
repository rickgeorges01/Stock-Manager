import { Routes } from '@angular/router';
import {PageLoginComponent} from "./page-login/page-login.component";
import {PageInscriptionComponent} from "./page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./page-dashboard/page-dashboard.component";

export const routes: Routes = [
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path:'inscrire',
    component: PageInscriptionComponent
  },
/**  {
    path:'dashboard',
    component: PageDashboardComponent,
    children:[
      {
        path:'articles'
      }
    ]
  }**/
];
