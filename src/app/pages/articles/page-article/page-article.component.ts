import {Component, OnInit} from '@angular/core';
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent
  ],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent implements OnInit{
constructor(
  private router : Router
 ) { }

  newArticle() {
      this.router.navigate(['new-articles'])
  }

  ngOnInit(): void {
  }
}
