import {Component, OnInit} from '@angular/core';
import {Menu} from './menu';
import {NgForOf} from "@angular/common";
import {Router, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  // Définition d'un tableau pour stocker les propriétés du menu.
  public menuProperties :Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu:[
      {
        id: '1.1',
        titre: 'Vue d\'ensemble',
        icon: 'fas fa-chart-pie',
        url: '',
      },
      {
        id: '1.2',
        titre: 'Statistiques',
        icon: 'fas fa-chart-bar',
        url: 'stats',
      }
    ]
  },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu:[
        {
          id:'2.1',
          titre: 'Articles',
          icon:'fas fa-box-open',
          url:'articles',
        },
        {
          id:'2.1',
          titre: 'Mouvements du stock',
          icon:'fas fa-people-carry',
          url:'',
        }

      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '',
      sousMenu:[
        {
          id:'3.1',
          titre: 'Clients',
          icon:'fas fa-user',
          url:'',
        },
        {
          id:'3.2',
          titre: 'Commandes clients',
          icon:'fas fa-tags',
          url:'',
        }

      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fas fa-users',
      url: '',
      sousMenu:[
        {
          id:'4.1',
          titre: 'Fournisseurs',
          icon:'fas fa-user',
          url:'',
        },
        {
          id:'4.2',
          titre: 'Commandes fournisseurs',
          icon:'fas fa-shopping-cart',
          url:'',
        }

      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu:[
        {
          id:'5.1',
          titre: 'Catégories',
          icon:'fas fa-wrench',
          url:'',
        },
        {
          id:'5.2',
          titre: 'Utilisateurs',
          icon:'fas fa-users-cog',
          url:'',
        }

      ]
    }
  ];

  constructor(private router:Router) {

  }
  ngOnInit(): void {

  }


// Méthode pour naviguer vers une URL spécifiée, utilisée lorsqu'un élément de sous-menu est cliqué.
  navigate(url?: string | undefined) {
    this.router.navigate([url]);
  }
}
