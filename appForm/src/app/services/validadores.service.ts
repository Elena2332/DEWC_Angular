import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noSerrano(control:FormControl):{[s:string]: boolean}{
    
    if(control.value?.toLowerCase() === 'serrano'){
      return { noSerrano:true }
    }

    return null;
  }

}
