export default function groceriesList() {
  const mapping = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const li = Array.from(Object.keys(obj));

  li.map((item) => mapping.set(item, obj[item]));
  return mapping;
}
