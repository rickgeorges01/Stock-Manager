import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-boutton-action',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.scss'
})


export class BouttonActionComponent implements OnInit{

  /** Variables créées pour l'affichage de bouton**/
  @Input()
  isNewVisible = true;
  @Input()
  isExpVisible = true;
  @Input()
  isImpVisible = true;



  @Output()//@Output envoi un évènement du comosant fils vers le composant parent
clickEvent = new EventEmitter()

  constructor() {
  }

  ngOnInit():void{
}

bouttonNewClick():void{
    this.clickEvent.emit()
}

}
