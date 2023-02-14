import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

  constructor() { }

  convTemperatura(tempC: number)
  {
    let tempF = 1.8 * tempC +32;
    return tempF;
  }
  
  convDistancia(distK: number)
  {
    let distM = distK * 0.621371;
    // redondear a las centesimas
    distM = Math.round(distM * 100)
    distM = distM / 100
    return distM;
  }
}
