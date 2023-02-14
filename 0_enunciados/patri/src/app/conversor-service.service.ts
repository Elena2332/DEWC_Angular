import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorServiceService {

  constructor(
  ) { }


  convertirTemperatura(temperatura: number): number{
    return 1.8 * temperatura + 32;
  }

  convertirDistancia ( distancia: number): number{
    return distancia * 0.621371;
  }

}
