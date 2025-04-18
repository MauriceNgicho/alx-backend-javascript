export default class ALXCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(size) {
    if (typeof size === 'number') {
      this._length = size;
    } else {
      throw new Error('Lenth must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStud) {
    if (
      Array.isArray(newStud)
      && newStud.every((student) => typeof student === 'string')
    ) {
      this._students = newStud;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
