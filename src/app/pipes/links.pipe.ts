import {Pipe, PipeTransform} from '@angular/core';
import * as linkifyStr from 'linkifyjs/string';

@Pipe({
  name: 'links'
})
export class LinksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? linkifyStr(value, {target: '_system'}) : value;
  }

}
