import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      // only allow to modify string keys
      if (typeof value[key] === 'string') {
        keys.push({ key: key, value: value[key] });
      }
    }
    return keys;
  }
}
