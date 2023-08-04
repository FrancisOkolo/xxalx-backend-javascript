export default function getListStudentIds(arr) {
  if (Object.getPrototypeOf(arr) !== Array.prototype) {
    return [];
  }
  return arr.map((arrr) => arrr.id);
}
