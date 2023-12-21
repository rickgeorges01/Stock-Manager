import { Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatsComponent} from "./pages/page-stats/page-stats.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";

export const routes: Routes = [
  {
    //definition de la route vers la page de login
    path:'login',
    component: PageLoginComponent
  },
  {
    //definition de la route vers la page d'inscription
    path:'inscrire',
    component: PageInscriptionComponent
  },
 {
   //defintion de la route vers la racine de l'app qui chargera une page possède plusieurs pages enfants
    path:'',
    component: PageDashboardComponent,
    children:[
      {
        //definition de la route vers la page des stats
        path:'stats',
        component:PageStatsComponent

      },
      {
        path:'articles',
        component: PageArticleComponent
      }
    ]
  }
];
