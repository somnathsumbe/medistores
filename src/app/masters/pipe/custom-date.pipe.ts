import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date): unknown {
    const selectedDate: Date = new Date(date);
    return selectedDate.toISOString().substring(0, 10);  
  }

}
