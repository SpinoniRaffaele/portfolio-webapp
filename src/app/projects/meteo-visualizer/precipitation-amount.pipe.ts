import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precipitationAmount'
})
export class PrecipitationAmountPipe implements PipeTransform {

  transform(value: number): string {
    let result: string = 'No Precipitations';
    switch (value){
      case 1: {result = '0-0.25mm/hr'; break;}
      case 2: {result = '0.25-1mm/hr'; break;}
      case 3: {result = '1-4mm/hr'; break;}
      case 4: {result = '4-10mm/hr'; break;}
      case 5: {result = '10-16mm/hr'; break;}
      case 6: {result = '16-30mm/hr'; break;}
      case 7: {result = '30-50mm/hr'; break;}
      case 8: {result = '50-75mm/hr'; break;}
      case 9: {result = 'Over 75mm/hr'; break;}
      default: {break;}
    }
    return result;
  }
}
