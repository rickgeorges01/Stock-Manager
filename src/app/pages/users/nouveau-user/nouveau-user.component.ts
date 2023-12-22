import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-user',
  standalone: true,
  imports: [],
  templateUrl: './nouveau-user.component.html',
  styleUrl: './nouveau-user.component.scss'
})
export class NouveauUserComponent implements OnInit{
  constructor(
    private router:Router
  ) {
  }
  ngOnInit(): void {
  }

  cancelClick() {
    this.router.navigate(['users'])
  }
}
