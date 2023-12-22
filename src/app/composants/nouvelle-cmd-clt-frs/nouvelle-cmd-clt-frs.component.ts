import {Component, OnInit} from '@angular/core';
import {DetailCmdComponent} from "../detail-cmd/detail-cmd.component";
import {DetailArticleComponent} from "../detail-article/detail-article.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  standalone: true,
  imports: [
    DetailCmdComponent,
    DetailArticleComponent
  ],
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent implements OnInit{

  origin='';
  constructor(
    private activatedRoute:ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    // Souscription aux données de la route actuelle
    this.activatedRoute.data.subscribe((data: any) =>{
      // Assignation de la valeur de 'origin' provenant des données de route
      this.origin = data.origin;
    });
  }

}
