import {Component, OnInit} from '@angular/core';
import {LugaresServiceService} from '../services/lugares-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable',[
      state('inicial', style({
        opacity:0.2 ,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity:1 ,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)',
        borderRadius: '50%'
      })),
      transition('inicial => final',animate(1000)),
      transition('final => inicial',animate(500))
    ])
  ]
})
export class LugaresComponent implements OnInit {
  public state: string = 'inicial';
  public lugares: any;
  public lat: number = 4.6807653;
  public lng: number = -74.0736073;
  public zoom: number = 11;

  constructor(private lugaresService: LugaresServiceService) {
  }

  ngOnInit() {
    this.lugaresService.getLugares().subscribe(lugares => {
      console.log(lugares);
      this.lugares = lugares;
    });
  }

  animar() {
    if (this.state === 'final') {
      this.state = 'inicial';
    }
    else {
      this.state = 'final';
    }
  }

  animacionInicia(e) {
    console.log('inicia', e);
  }

  animacionTermina(e) {
    console.log('termina', e);
  }
}
