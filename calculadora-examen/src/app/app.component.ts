import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-examen';

  form: FormGroup;   
  resultado: any = '';

  constructor(private fb: FormBuilder)
  {
    this.form = this.fb.group({
      n1: ['',Validators.required],
      n2: ['',Validators.required],
      operacion: ['',Validators.required]
    });

  }

  crearListeners()
  {
    this.form.valueChanges.subscribe(valor =>{
      this.resultado = '';
    });

  }

  calcular()
  {
    let n1 = this.form.value.n1;    
    let n2 = this.form.value.n2;    
    let operacion = this.form.value.operacion;

    if(operacion == 1)  //suma
    {
      this.resultado = n1+n2;
    }
    else 
    {
      if(operacion == 2)   //resta
      {
        this.resultado = n1-n2
      }
      else 
      {
        if(operacion == 3)   // multiplicacion
        {
          this.resultado = n1*n2
        }
        else    // division
        {
          if(n2 == 0)   // error
            this.resultado = 'Error de Division por cero'
          else 
          {
            this.resultado = Math.round(n1/n2)
          }
        }
      }
    }
    console.log(n1);
  }

}
