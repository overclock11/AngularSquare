import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LugaresServiceService {

  public lugares: any = [
    {'nombre': 'Francia', 'active': true, 'cercania': 1, 'distancia': 1, 'plan': 'pago', 'id': 1, 'descripcion':'descripcion del lugar escrita en los cuatro lados al tiempo!!'},
    {'nombre': 'Bogotá', 'active': true, 'cercania': 2, 'distancia': 3, 'plan': 'gratis', 'id': 2, 'descripcion':'descripcion del lugar escrita en los cuatro lados al tiempo!!'},
    {'nombre': 'Peru', 'active': true, 'cercania': 3, 'distancia': 43, 'plan': 'gratis', 'id': 3, 'descripcion':'descripcion del lugar escrita en los cuatro lados al tiempo!!'},
    {'nombre': 'Barranquilla', 'active': false, 'cercania': 1, 'distancia': 2, 'plan': 'pago', 'id': 4, 'descripcion':'descripcion del lugar escrita en los cuatro lados al tiempo!!'}
  ];
  constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }

  buscarLugar(id: number) {
    return this.lugares.find((lugar) => {
      return lugar.id == id;
    });
  }

  guardarLugar(lugar){
    this.afDB.database.ref('lugares/'+this.afDB.createPushId()).set(lugar);
  }

  getLugares() {
    return this.afDB.list('lugares').valueChanges();
  }

  obtenerGeoData(direccion): Observable<any> {
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+ direccion+'?key=AIzaSyCwzs1SVQmNBgy4DxYk6i3SeZhJlN8Gk80');
  }
}
