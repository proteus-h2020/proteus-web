import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    // The property which can't be shown on configuration menu irrespective of condition
    let noServeKeys = ['selector', 'width', 'legendPosition', 'pauseButtonPosition'];
    for (let key in value) {
      if (noServeKeys.indexOf(key) == -1) {
          // only allow to modify non-css property (usually type of css property is number)
          if (typeof value[key] === 'string' || typeof value[key] === 'boolean') {
            keys.push({ key: key, value: value[key] });
          }
      }
    }
    return keys;
  }
}
