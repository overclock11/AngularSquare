import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'li[appContarClicks]'
})
export class ContarClicksDirective {
  public clickN: number =0;
  @HostBinding('style.opacity') opacity: number = 0.8;
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log(++this.clickN);
    //this.opacity += 0.1;
  }
  constructor() { }
}
