import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL = 'https://appangularcrud-default-rtdb.europe-west1.firebasedatabase.app'

  constructor(private http:HttpClient) { }
  crearHeroe (heroe:HeroeModel){
    return this.http.post('${this.URL}/heroes.json', heroe)
    .pipe(
      map((resp: any) =>{
        heroe.id = resp.name;
        return heroe
      })
    );
  }

  actualizarHeroe (heroe:HeroeModel){
    const heroeTemp = {
      ...heroe
    }

    delete heroeTemp.id;
    return this.http.post('${this.URL}/heroes/${ $heroe.id }.json', heroeTemp)
  }
}
