import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LugaresServiceService {
  public API: any = 'https://platzisquare-jbo-1528211458115.firebaseio.com/';
  public lugares: any ={};
  constructor(private afDB: AngularFireDatabase, private http: HttpClient) {
  }

  buscarLugar(id: number) {
    return this.lugares.find((lugar) => {
      return lugar.id == id;
    });
  }

  guardarLugar(lugar) {
    //this.afDB.database.ref('lugares/'+this.afDB.createPushId()).set(lugar);
    return this.http.post(this.API + '/lugares.json', lugar);
  }

  getLugares() {
    return this.afDB.list('lugares').valueChanges();
  }

  obtenerGeoData(direccion): Observable<any> {
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion + '?key=123456');
  }
}
