import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {DetailCltFrsComponent} from "../../../composants/detail-clt-frs/detail-clt-frs.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailCltFrsComponent
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent implements OnInit{

  constructor(
    private router:Router
  ) {
  }
  newClient() {
    this.router.navigate(['new-clients'])
  }

  ngOnInit(): void {
  }
}
