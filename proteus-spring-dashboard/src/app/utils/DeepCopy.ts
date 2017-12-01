export function deepCopy(obj: any) {
  if (obj == null || typeof(obj) != 'object') {
    return obj;
  }
  let temp = new obj.constructor();
  for (let key in obj) {
    temp[key] = deepCopy(obj[key]);
  }

  return temp;
}
