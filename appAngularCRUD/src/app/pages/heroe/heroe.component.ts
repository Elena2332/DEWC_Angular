import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm }   from '@angular/forms';


import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit{
  heroe: HeroeModel = new HeroeModel();
  constructor (private heroesService: HeroesService) {}
  ngOnInit(){

  }


  guardar (form: NgForm){
    if (form.invalid){
      console.log('Formulario no valido')
      return
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    })

    Swal.showLoading()
    if (this.heroe.id){
      //Actualizar
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe( resp => {
        console.log(resp)
      })
    }else{
      this.heroesService.crearHeroe(this.heroe).subscribe (resp=>{
        console.log(resp)
        this.heroe = resp
      });
    }
    
   

  }

}
