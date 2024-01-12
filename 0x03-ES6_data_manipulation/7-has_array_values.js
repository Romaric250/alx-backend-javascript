export default function hasValuesFromArray(set, list) {
  let hasvalue = true;
  list.map((x) => {
    if (!set.has(x)) {
      hasvalue = false;
      
    }
  });

  return hasvalue;
}
