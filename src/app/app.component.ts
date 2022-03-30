import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'My first Angular app' ;
  imageUrl:string = "https://imagens.ebc.com.br/_oPqYgSZiP7oaoEEDvfpLdbn1fs=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/banco-do-brasil_mcamgo_abr_280620211818-9.jpg?itok=r1JWOxWM"
  isValid: boolean = false;
  onClickMe($event:any){
    console.log ("Clicked", $event)
  }

}
