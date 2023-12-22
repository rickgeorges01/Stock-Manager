import { Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatsComponent} from "./pages/page-stats/page-stats.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstckComponent} from "./pages/mvtstck/page-mvtstck/page-mvtstck.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseurs/page-fournisseur/page-fournisseur.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "./composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import {PagesCategoriesComponent} from "./pages/categories/pages-categories/pages-categories.component";
import {NouvelleCategorieComponent} from "./pages/categories/nouvelle-categorie/nouvelle-categorie.component";
import {PageUsersComponent} from "./pages/users/page-users/page-users.component";
import {NouveauUserComponent} from "./pages/users/nouveau-user/nouveau-user.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMdpComponent} from "./pages/profil/changer-mdp/changer-mdp.component";

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
      },
      {
        path:'new-articles',
        component: NouvelArticleComponent
      },
      {
        path:'mvt-stock',
        component: PageMvtstckComponent
      },
      {
        path:'clients',
        component: PageClientComponent
      },
      {
        path:'new-clients',
        component: NouveauCltFrsComponent,
        data: {
          origin:'clients'
        }
      },
      {
        path:'cmd-clients',
        component: PageCmdCltFrsComponent,
        data: {
          origin:'clients'
        }
      },
      {
        path:'new-client-commande',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin:'clients'
        }
      },
      {
        path:'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path:'new-fournisseurs',
        component: NouveauCltFrsComponent,
        data: {
          origin:'fournisseurs'
        }
      },
      {
        path:'cmd-fournisseurs',
        component: PageCmdCltFrsComponent,
        data: {
          origin:'fournisseurs'
        }
      },
      {
        path:'new-fournisseurs-commande',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin:'fournisseurs'
        }
      },
      {
        path:'categories',
        component: PagesCategoriesComponent
      },
      {
        path:'new-categorie',
        component: NouvelleCategorieComponent
      },
      {
        path:'users',
        component: PageUsersComponent
      },
      {
        path:'new-users',
        component: NouveauUserComponent
      },
      {
        path:'profil',
        component: PageProfilComponent
      },
      {
        path:'changer-mdp',
        component: ChangerMdpComponent
      },
    ]
  }
];

