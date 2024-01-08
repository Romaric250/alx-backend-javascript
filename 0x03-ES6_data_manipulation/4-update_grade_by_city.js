export default function updateStudentGradeByCity(getlist = [], city, newGrades = []) {
  const filteredStudents = getlist.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}
