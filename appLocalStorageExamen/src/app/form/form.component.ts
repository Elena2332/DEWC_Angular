import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  constructor(private fb: FormBuilder, public form:FormGroup)
  {
    this.crearFormulario();
  }

  crearFormulario()
  {
    this.form = this.fb.group({
      titulo: [''],
      texto: ['']
    })
  }


  guardar()
  {
    
  }

}
