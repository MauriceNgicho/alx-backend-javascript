export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
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
      throw new TypeError('name must be a string');
    }
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  // new method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
