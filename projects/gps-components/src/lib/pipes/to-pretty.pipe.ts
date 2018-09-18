import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'toPretty' })
export class ToPrettyPipe implements PipeTransform {
  transform(value: string): string {
    let frags = value.split('_');
    for (let i = 0; i < frags.length; i++) {
      frags[i] = frags[i].toLowerCase();
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
}
