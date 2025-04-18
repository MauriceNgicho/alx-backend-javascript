export default class ALXClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Custom behavior when cast to number
  valueOf() {
    return this._size;
  }

  // Custom behavior when cast to string
  toString() {
    return this._location;
  }
}
