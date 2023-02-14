import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConvertidorService } from './convertidor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convertidor-examen';
  
  form: FormGroup;   
  temperatura : any;
  distancia : any;

  constructor(private fb: FormBuilder, private conv:ConvertidorService)
  {
    this.form = this.fb.group({
      temp: ['',Validators.required],
      dist: ['',Validators.required]
    });
    
    this.convertir()
  }


  convertir()
  {
    let temp = this.form.value.temp;    
    let dist = this.form.value.dist; 

    this.temperatura = this.conv.convTemperatura(temp);
    this.distancia = this.conv.convDistancia(dist);
  }


}
