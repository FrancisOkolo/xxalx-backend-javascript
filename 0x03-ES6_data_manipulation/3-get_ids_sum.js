export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, cur) => acc + cur.id, 0);
  }
  return 0;
}
