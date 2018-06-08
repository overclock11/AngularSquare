import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresServiceService} from '../services/lugares-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public lugares: any = [
    {'nombre': 'Francia', 'active': true, 'cercania': 1, 'distancia': 1, 'plan': 'pago', 'id': 1, 'descripcion': 'Hablan frances tienen lugares bonitos y es en europa'},
    {'nombre': 'Bogotá', 'active': true, 'cercania': 2, 'distancia': 3, 'plan': 'gratis', 'id': 2, 'descripcion': 'El clima cambia mucho su transporte siempre esta colapsado'},
    {'nombre': 'Peru', 'active': true, 'cercania': 3, 'distancia': 43, 'plan': 'gratis', 'id': 3, 'descripcion': 'Tienen estatuas'},
    {'nombre': 'Barranquilla', 'active': false, 'cercania': 1, 'distancia': 2, 'plan': 'pago', 'id': 4, 'descripcion': 'Se inunda cuando llueve'}
  ];
  public id: number = null;
  public lugar: any;

  constructor(private route: ActivatedRoute, private lugaresService: LugaresServiceService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }


}
