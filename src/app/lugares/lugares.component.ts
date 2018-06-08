import {Component, OnInit} from '@angular/core';
import {LugaresServiceService} from '../services/lugares-service.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  public lugares: any ;

  public lat: number = 4.6858087;
  public lng: number = -74.0569435;

  constructor(private lugaresService: LugaresServiceService) {
  }

  ngOnInit(){
    this.lugaresService.getLugares().subscribe(lugares => {
      console.log(lugares);
      this.lugares = lugares;
    });
  }
}
