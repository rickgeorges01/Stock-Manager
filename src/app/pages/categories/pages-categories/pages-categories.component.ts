import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pages-categories',
  standalone: true,
    imports: [
        BouttonActionComponent,
        DetailArticleComponent,
        PaginationComponent
    ],
  templateUrl: './pages-categories.component.html',
  styleUrl: './pages-categories.component.scss'
})
export class PagesCategoriesComponent implements OnInit{

  constructor(
    private router: Router
  ) {
  }
  newCategorie() {
    this.router.navigate(['new-categorie'])
  }

  ngOnInit(): void {
  }
}
