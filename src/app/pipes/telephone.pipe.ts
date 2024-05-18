import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone',
})
export class TelephonePipe implements PipeTransform {
  transform(value: string | number, type: 'BRL', ...args: unknown[]): string {
    const telephone = value.toString();
    switch (type) {
      case 'BRL':
        return `(${telephone.substring(0, 2)}) ${telephone.substring(3, 7)}-${telephone.substring(7, 12)}`;
      default:
        return telephone;
    }
  }
}
