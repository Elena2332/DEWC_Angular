import { Component } from '@angular/core';
import { ConversorServiceService } from './conversor-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private conversorService:ConversorServiceService) {}

  title = 'appConversor';
  pageTitle = 'Conversor generico de grados Celsius a Farenheit y de kilometros a millas';
  nuevaTemperatura = "32.00";
  nuevaDistancia = "0.00";
  temperatura = new FormControl('0');
  distancia = new FormControl('0')

  mostrarResultado():void {
    this.nuevaTemperatura = this.conversorService.convertirTemperatura(Number(this.temperatura.value)).toFixed(2);
    this.nuevaDistancia = this.conversorService.convertirDistancia(Number(this.distancia.value)).toFixed(2);
  }

}
