export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let call = 0;
  if (weakMap.get(endpoint)) call = weakMap.get(endpoint);
  weakMap.set(endpoint, call + 1);
  if (call + 1 >= 5) throw new Error('Endpoint load is high');
}
