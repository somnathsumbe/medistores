import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any, type: any): any {
    if(value===0){
       return value;
    }
    return value.filter(function(search){
      return (search[type].toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1 ;
    })
  }

}
