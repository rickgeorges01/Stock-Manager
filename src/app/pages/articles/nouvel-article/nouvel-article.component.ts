import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent implements OnInit{
  constructor(
    private router : Router
  ) {
  }

  cancelClick() {
    this.router.navigate(['articles'])
  }

  ngOnInit(): void {
  }
}
