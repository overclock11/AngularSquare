import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public lat: number = 4.6858087;
  public lng: number = -74.0569435;
  constructor() { }

  ngOnInit() {
  }

}
