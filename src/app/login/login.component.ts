import {Component, OnInit} from '@angular/core';
import {AutorizacionService} from '../services/autorizacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string;
  public email: string;

  constructor(private autService: AutorizacionService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.autService.login(this.email, this.password).then((res) => {
      console.log(res);
      this.router.navigate(['lugares']);
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    this.autService.logout().then((res) => {
      console.log(res);
      this.router.navigate(['lugares']);
    }, (err) => {
      console.log(err);
    });
  }
}
