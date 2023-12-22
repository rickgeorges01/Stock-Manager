import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../composants/boutton-action/boutton-action.component";
import {
    DetailMvtStckArticleComponent
} from "../../composants/detail-mvt-stck-article/detail-mvt-stck-article.component";
import {DetailMvtStckComponent} from "../../composants/detail-mvt-stck/detail-mvt-stck.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {DetailsCmdCltFrsComponent} from "../../composants/details-cmd-clt-frs/details-cmd-clt-frs.component";
import {DetailCmdComponent} from "../../composants/detail-cmd/detail-cmd.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailMvtStckArticleComponent,
    DetailMvtStckComponent,
    PaginationComponent,
    DetailsCmdCltFrsComponent,
    DetailCmdComponent
  ],
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.scss'
})

export class PageCmdCltFrsComponent implements OnInit{

  //varaiable pour stocker l'origin de la commande (client/fournisseur)
  origin='';
  constructor(
    private router:Router,
    //Accède aux informations de la route actuelle
    private activatedRoute:ActivatedRoute
  ) {
  }
  // Méthode pour créer une nouvelle commande
  newCommande() {
    if (this.origin==='clients'){
      //navigation vers la route
      this.router.navigate(['new-client-commande'])
    }else if (this.origin === 'fournisseurs'){
      //navigation vers la route
      this.router.navigate(['new-fournisseurs-commande'])
    }
  }

  ngOnInit(): void {
    // Souscription aux données de la route actuelle
    this.activatedRoute.data.subscribe((data: any) =>{
      // Assignation de la valeur de 'origin' provenant des données de route
      this.origin = data.origin;
    });
  }
}
