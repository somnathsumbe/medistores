import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any, type: any): any {
    if(value===0 && !searchTerm){
       return value;
    }
    return value.filter(function(search){
      if(search[type] && searchTerm) {
        return (search[type].toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1 ;
      }
      return;
    })
  }

}
