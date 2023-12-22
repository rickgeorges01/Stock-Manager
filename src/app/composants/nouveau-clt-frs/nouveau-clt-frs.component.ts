import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-clt-frs',
  standalone: true,
  imports: [],
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrl: './nouveau-clt-frs.component.scss'
})
export class NouveauCltFrsComponent implements OnInit{

  origin='';

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    // Souscription aux données de la route actuelle
    this.activatedRoute.data.subscribe((data: any) =>{
      // Assignation de la valeur de 'origin' provenant des données de route
      this.origin = data.origin;
    });
  }
  saveClick(): void{
  }
  cancelClick(): void{
    if (this.origin === 'clients'){
      this.router.navigate(['clients']);
    }else if (this.origin === 'fournisseurs'){
      this.router.navigate(['fournisseurs']);
    }
  }

}
