import {Component, OnInit} from '@angular/core';
import {AutorizacionService} from '../services/autorizacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private autService: AutorizacionService) {
  }

  ngOnInit() {
  }

  registrarse() {
    this.autService.registro(this.email, this.password).then((data) => {
      console.log('correcto', data);
    }, (err) => {
      console.log('error', err);
    });
  }
}
