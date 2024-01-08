export default function getListStudentIds(arr) {
  const li = [];
  if (Array.isArray(arr)) {
    arr.map((el) => {
      li.push(el.id);
      return null;
    });

    return li;
  }

  return [];
}
