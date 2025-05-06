import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true,
})
export class NaPipe implements PipeTransform {
  transform(value: string | null | undefined, ...args: unknown[]): unknown {
    if (value?.trim() === "" || value === null || value === undefined) {
      // must be 1st condition value !== "" otherwise throws error
      return 'N/A';
    } else {
      return value;
    }
  }
}
