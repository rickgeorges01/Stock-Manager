import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PageLoginComponent} from "./page-login/page-login.component";
import {PageInscriptionComponent} from "./page-inscription/page-inscription.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PageLoginComponent, PageInscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stock-manager';
}
