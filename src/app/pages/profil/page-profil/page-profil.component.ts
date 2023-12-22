import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-profil',
  standalone: true,
  imports: [],
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent implements OnInit{

  constructor(
    private router:Router
  ) {
  }
  modifierMDP() {
  this.router.navigate(['changer-mdp'])
  }

  ngOnInit(): void {
  }
}
