import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
  imports: [],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.scss'
})
export class NouvelleCategorieComponent implements OnInit{

  constructor(
    private router:Router
  ) {
  }
  ngOnInit(): void {
  }

  //Redirection vers la liste des categories à partir du bouton annuler
  cancelClick() {
    this.router.navigate(['categories'])
  }
}
