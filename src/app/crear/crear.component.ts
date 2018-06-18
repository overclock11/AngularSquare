import {Component, OnInit} from '@angular/core';
import {LugaresServiceService} from '../services/lugares-service.service';
import {FormControl} from '@angular/forms';
import {Observable, ObservableInput} from 'rxjs/index';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  public lugar: any = {
    'nombre': 'Genius',
    'plan': 'pago',
    'direccion': 'carrera 29 75a-56',
    'ciudad': 'Bogota',
    'pais': 'Colombia',
    'descripcion': 'Descripcopnnnnn'
  };
  private searchField: FormControl;
  public results$: Observable<any>;
  public url: string = '';

  constructor(private lugarService: LugaresServiceService, private http: HttpClient) {
  }

  ngOnInit() {
    this.url = 'http://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(query => this.http.get(`${this.url}?address=${query}`))
      .map(response =>  response['results']);
  }

  guardarLugar() {
    let direccion = this.lugar.direccion + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    console.log(direccion);
    this.lugarService.obtenerGeoData(direccion).subscribe((result) => {
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;
      this.lugarService.guardarLugar(this.lugar).subscribe((res) => {
        console.log('firebase guard con exito', res);
      }, (err) => {
        console.log(err);
      });
      this.lugar = {};
    }, (err) => {
      console.log(err);
    });
  }
}
