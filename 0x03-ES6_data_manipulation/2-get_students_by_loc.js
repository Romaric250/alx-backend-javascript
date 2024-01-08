export default function getStudentsByLocation(getlist = [], city) {
  const arr = getlist.filter((people) => people.location === city);
  return arr;
}
