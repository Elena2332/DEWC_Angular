import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../services/validadores.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  form : FormGroup;   //declarar variable

  ngOnInit(): void { }

  constructor(private fb: FormBuilder, 
              private validadores: ValidadoresService)
  {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }

  
  crearListeners()
  {
    this.form.valueChanges.subscribe(valor =>{
      console.log(valor);
    });

    this.form.statusChanges.subscribe(status => console.log({status}))
  }

  crearFormulario()
  {
    this.form = this.fb.group({
      nombre: ['', Validators.required, Validators.minLength(5)],   //validators:= libreria para validaciones
      apellido: ['', Validators.required, Validators.minLength(5), this.validadores.noSerrano],
      pass1: ['',Validators.required],
      pass2: ['',Validators.required],
      correo: ['', Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      usuario: ['', , this.validadores.existeUsuario],
      direccion: this.fb.group({
        poblacion: ['',Validators.required],
        ciudad: ['',Validators.required]
      }),
      pasatiempos: this.fb.array([])
    },{
      validators: this.validadores.passwordsIguales('pass1','pass2')
    });  
  }

  cargarDataAlFormulario()
  {
    //this.form.setValue({
    this.form.reset({
      nombre: 'Txema',
      apellido: 'Serrano',
      correo: 'asd@asd.com',
      pass1: 'asd',
      pass2: 'asd',
      direccion: {
        poblacion: 'asd',
        provincia: 'asd'
      }
    });
  }

  guardar()
  {
    console.log(this.form);

    if(this.form.invalid)
    {
      return Object.values(this.form.controls).forEach((control) => {
        if(control instanceof FormGroup)
        {
          Object.values(control.controls).forEach((control) => 
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }       
      });
    }
    this.form.reset();
  }


  get nombreNoValido()
  {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched
  }

  get apellidoNoValido()
  {
    return this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched
  }

  get correoNoValido()
  {
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched
  }

  get poblacionNoValido()
  {
    return this.form.get('poblacion')?.invalid && this.form.get('poblacion')?.touched
  }
  get ciudadNoValido()
  {
    return this.form.get('ciudad')?.invalid && this.form.get('correo')?.touched
  }

  get pasatiempos()
  {
    return this.form.get('pasatiempos') as FormArray;
  }

  agregarPasatiempos()
  {
    this.pasatiempos.push(this.fb.control(''))
  }
  borrarPasatiempo(i : number)
  {
    this.pasatiempos.removeAt(i)
  }

  get pass1NoValido()
  {
    return this.form.get('pass1').invalid && this.form.get('pass1').touched
  }

  get pass2NoValido()
  {
    const pass1 = this.form.get('pass1').value 
    const pass2 = this.form.get('pass2').value 

    return (pass1 === pass2) ? false:true;
  }

  get usuarioNoValido(){
    return this.form.get('usuario').invalid && this.form.get('usuario').touched
  }
}
