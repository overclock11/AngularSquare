import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AutorizacionService} from './autorizacion.service';

@Injectable()
export class LogueadoGuard implements CanActivate {
  public isLogged: boolean = false;
  constructor(private autService: AutorizacionService) {
    this.autService.isLogged().subscribe((result) => {
      if (result && result.uid) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }, (err) => {
      console.log(err);
      this.isLogged = false;
    });
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLogged;
  }
}
