import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    let noServeKeys = ['selector', 'legendPosition', 'pauseButtonPosition']; // The property which user can't set
    for (let key in value) {
      // only allow to modify not css property (usually type of css property is number)
      if (noServeKeys.indexOf(key) == -1) {
          if (typeof value[key] === 'string' || typeof value[key] === 'boolean') {
            keys.push({ key: key, value: value[key] });
          }
      }
    }
    return keys;
  }
}
