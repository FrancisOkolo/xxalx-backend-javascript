export default function getStudentsByLocation(students, city) {
  if (students instanceOf Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
