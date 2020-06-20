import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readmore'
})
export class ReadmorePipe implements PipeTransform {

link ="<a href=''>readmore</a>";
  transform(value:any, limit:number=20, symbol:string="link"): unknown {
    return value.slice(0,limit)+symbol;
  }

}
