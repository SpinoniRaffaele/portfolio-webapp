import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precipitationAmount'
})
export class PrecipitationAmountPipe implements PipeTransform {

  transform(value: number): string {
    const hours: string = $localize`hr`;
    let result: string = $localize`No Precipitations`;
    switch (value){
      case 1: {result = '0-0.25mm/'+hours; break;}
      case 2: {result = '0.25-1mm/'+hours; break;}
      case 3: {result = '1-4mm/'+hours; break;}
      case 4: {result = '4-10mm/'+hours; break;}
      case 5: {result = '10-16mm/'+hours; break;}
      case 6: {result = '16-30mm/'+hours; break;}
      case 7: {result = '30-50mm/'+hours; break;}
      case 8: {result = '50-75mm/'+hours; break;}
      case 9: {result = 'Over 75mm/'+hours; break;}
      default: {break;}
    }
    return result;
  }
}
