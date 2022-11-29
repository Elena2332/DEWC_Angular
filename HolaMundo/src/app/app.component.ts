import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  nombre = 'Elena';
  apellido = 'de Troya';

  mostrar = false;

  personajes = ["Spiderman","Venom", "Dr.Octopus"];

  cambiarVisibilidad()
  {
    if(this.mostrar)
      this.mostrar = false;
    else
      this.mostrar = true;
  }
}
