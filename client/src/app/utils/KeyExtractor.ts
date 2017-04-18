
export function extractKeysFromObject(o: any) {
    if (o.constructor === Array) {
        return extractKeysFromObject(o[0]);
    }
    return Object.keys(o);
}