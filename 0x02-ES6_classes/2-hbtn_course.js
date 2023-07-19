export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('Name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('Length must be a string');
    if (Object.getPrototypeOf(students) !== Array.prototype) throw TypeError('Stuents must be an array of strings');
    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('Students must be an array of strings');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(setName) {
    if (Object.getPrototypeOf(setName) !== String.prototype) throw TypeError('Name must be a string');
    this._name = setName;
  }

  set length(setLength) {
    if (Object.getPrototypeOf(setLength) !== Number.prototype) throw TypeError('Length must be a number');
    this._length = setLength;
  }

  set students(setStudents) {
    if (Object.getPrototypeOf(setStudents) !== Array.prototype) throw TypeError('Students must be an array of strings');
    this._students = setStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
