import {Component, OnInit} from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailCltFrsComponent} from "../../../composants/detail-clt-frs/detail-clt-frs.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {DetailUsersComponent} from "../../../composants/detail-users/detail-users.component";

@Component({
  selector: 'app-page-users',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailCltFrsComponent,
    PaginationComponent,
    DetailUsersComponent
  ],
  templateUrl: './page-users.component.html',
  styleUrl: './page-users.component.scss'
})
export class PageUsersComponent implements OnInit{
  constructor(
    private router: Router
  ) { }
  newUsers() {
    this.router.navigate(['new-users'])
  }

  ngOnInit(): void {
  }
}
