import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-changer-mdp',
  standalone: true,
  imports: [],
  templateUrl: './changer-mdp.component.html',
  styleUrl: './changer-mdp.component.scss'
})
export class ChangerMdpComponent implements  OnInit{

  constructor(
    private router:Router
  ) {
  }
  ngOnInit(): void {
  }

  cancelClick() {
    this.router.navigate(['profil'])
  }
}
