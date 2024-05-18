import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormater',
})
export class DateFormaterPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    return new Date(value).toLocaleDateString('pt-BR', {
      dateStyle: 'medium',
      timeZone: 'UTC',
    });
  }
}
