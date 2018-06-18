import {Component} from '@angular/core';
import {AutorizacionService} from './services/autorizacion.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn: boolean = false;

  constructor(private autService: AutorizacionService) {
    this.autService.isLogged().subscribe((res) => {
      if (res && res.uid) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    }, (err) => {
      this.loggedIn = false;
    });
  }
}
