// Create a function getStudentIdsSum that returns the sum of all the student ids.

// It should accept a list of students (from getListStudents) as a parameter.

// You must use the reduce function on the array.

export default function getStudentIdsSum(students = []) {
  const arr = students.reduce((el, accumulator) => el + accumulator.id, 0);

  return arr;
}
