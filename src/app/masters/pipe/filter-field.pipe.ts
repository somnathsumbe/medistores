import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterField'
})
export class FilterFieldPipe implements PipeTransform {

  transform(value: any, fieldArr: [], filterBy: string): any {
    const selected = fieldArr.filter(field => { return field[filterBy] == value})
    return selected[0];
  }

}
