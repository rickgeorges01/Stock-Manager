import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailMvtStckArticleComponent
} from "../../../composants/detail-mvt-stck-article/detail-mvt-stck-article.component";
import {DetailMvtStckComponent} from "../../../composants/detail-mvt-stck/detail-mvt-stck.component";

@Component({
  selector: 'app-page-mvtstck',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailMvtStckArticleComponent,
    DetailMvtStckComponent
  ],
  templateUrl: './page-mvtstck.component.html',
  styleUrl: './page-mvtstck.component.scss'
})
export class PageMvtstckComponent {

}
