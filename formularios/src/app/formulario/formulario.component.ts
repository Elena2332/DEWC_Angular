import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  form : FormGroup;   //declarar variable

  ngOnInit(): void { }

  constructor(private fb: FormBuilder)
  {
    this.crearFormulario()
  }

  crearFormulario()
  {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: ['']
    });  
  }


  guardar()
  {
    console.log(this.form);
  }
}
