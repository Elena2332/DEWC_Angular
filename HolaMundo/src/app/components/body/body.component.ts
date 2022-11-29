import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  mostrar = false;
  frase:any = {
    autor: 'Ben Parker',
    mensaje: 'Un gran poder conlleva una gran resposavilidad'
  };
  personajes = ['Spidermas','Húlk','Thör','Dardevil'];

  cambiarVisibilidad() 
  {
    if(this.mostrar)
      this.mostrar = false; 
    else
      this.mostrar = true;
  }
}
