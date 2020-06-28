import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterField'
})
export class FilterFieldPipe implements PipeTransform {

  transform(filterBy: any, fieldArr: []): any {
    const selected = fieldArr.filter(field => { return field['filterBy'] == filterBy})
    return selected;
  }

}
