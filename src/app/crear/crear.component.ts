import { Component, OnInit } from '@angular/core';
import {LugaresServiceService} from '../services/lugares-service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  public lugar: any={
    "nombre":"Genius",
    "plan":"pago",
    "direccion":"carrera 29 75a-56",
    "ciudad":"Bogota",
    "pais":"Colombia",
    "descripcion":"Descripcopnnnnn"
  };
  constructor(private lugarService: LugaresServiceService) { }

  ngOnInit() {
  }

  guardarLugar(){
    let direccion = this.lugar.direccion+','+this.lugar.ciudad+','+this.lugar.pais;
    console.log(direccion);
    this.lugarService.obtenerGeoData(direccion).subscribe((result)=>{
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;
      this.lugarService.guardarLugar(this.lugar);
      this.lugar ={};
    },(err)=>{
      console.log(err);
    });
  }
}
