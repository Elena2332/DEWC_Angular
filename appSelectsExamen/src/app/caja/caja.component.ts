import { Component } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent {

  json = [
    {
        "pais": "España", "provincia": "Canarias", "ciudad": "Las Palmas"
    },
    {
        "pais": "España", "provincia": "Canarias", "ciudad": "Puerto del Rosario"
    },
    {
        "pais": "España", "provincia": "Canarias", "ciudad": "Arrecife"
    },
    {
        "pais": "España", "provincia": "Andalucía", "ciudad": "Sevilla"
    },
    {
        "pais": "España", "provincia": "Andalucía", "ciudad": "Málaga"
    },
    {
        "pais": "España", "provincia": "Andalucía", "ciudad": "Córdoba"
    },
    {
        "pais": "España", "provincia": "Euskadi", "ciudad": "Bilbo"
    },
    {
        "pais": "España", "provincia": "Euskadi", "ciudad": "Donosti"
    },
    {
        "pais": "España", "provincia": "Euskadi", "ciudad": "Gasteiz"
    },
    {
        "pais": "Francia", "provincia": "Alsacia", "ciudad": "Estrasburgo"
    },
    {
        "pais": "Francia", "provincia": "Alsacia", "ciudad": "Haguenau"
    },
    {
        "pais": "Francia", "provincia": "Alsacia", "ciudad": "Mulhouse"
    },
    {
        "pais": "Francia", "provincia": "Aquitania", "ciudad": "Bayona"
    },
    {
        "pais": "Francia", "provincia": "Aquitania", "ciudad": "Burdeis"
    },
    {
        "pais": "Francia", "provincia": "Aquitania", "ciudad": "Pau"
    },
    {
        "pais": "Francia", "provincia": "Las Ardenas", "ciudad": "Ardenas"
    },
    {
        "pais": "Francia", "provincia": "Las Ardenas", "ciudad": "Baubes"
    },
    {
        "pais": "Francia", "provincia": "Las Ardenas", "ciudad": "Arne"
    },
    {
        "pais": "USA", "provincia": "Arizona", "ciudad": "Benson"
    },
    {
        "pais": "USA", "provincia": "Arizona", "ciudad": "Phoenix"
    },
    {
        "pais": "USA", "provincia": "Arizona", "ciudad": "Tuucson"
    },
    {
        "pais": "USA", "provincia": "Florida", "ciudad": "Miami"
    },
    {
        "pais": "USA", "provincia": "Florida", "ciudad": "Pensacola"
    },
    {
        "pais": "USA", "provincia": "Florida", "ciudad": "Tampa"
    },
    {
        "pais": "USA", "provincia": "California", "ciudad": "Fresno"
    },
    {
        "pais": "USA", "provincia": "California", "ciudad": "Los Angeles"
    },
    {
        "pais": "USA", "provincia": "California", "ciudad": "San Francisco"
    }
]

  paises = ['--Selecciona un Pais--','España','Francia','USA']
  provincias = ['--Selecciona un Estado o Provincia--']
  ciudades = ['--Selecciona un Ciudad--']

  pais = ''
  provincia = ''
  ciudad = ''

  mostrarMensaje = false;

  constructor()
  {
    this.llenarPaises();
  }


  llenarPaises()
  {
    this.json.forEach(element => {
      if(this.paises.indexOf(element.pais)<0)
        this.paises.push(element.pais);
    });
    this.mostrarMensaje = false
  }

  llenarProvincias()
  {
    this.json.forEach(element => {
      if(this.pais == element.pais)
        if(this.provincias.indexOf(element.provincia)<0)
          this.provincias.push(element.provincia);
    });
    this.mostrarMensaje = false
  }

  llenarCiudades()
  {
    this.json.forEach(element => {
      if(this.provincia == element.provincia)
        if(this.ciudades.indexOf(element.provincia)<0)
          this.ciudades.push(element.ciudad);
    });
    this.mostrarMensaje = false
  }


  comprobarMensaje()
  {
      this.mostrarMensaje = true
  }

}
