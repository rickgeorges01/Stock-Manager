import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailCltFrsComponent} from "../../../composants/detail-clt-frs/detail-clt-frs.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
    imports: [
        BouttonActionComponent,
        DetailCltFrsComponent,
        PaginationComponent
    ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent implements OnInit{

  constructor(
    private router:Router
  ) {
  }
  newFourniseur() {
    this.router.navigate(['new-fournisseurs'])
  }

  ngOnInit(): void {
  }
}
