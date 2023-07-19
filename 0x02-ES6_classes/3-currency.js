export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(setCode) {
    this._code = setCode;
  }

  set name(setName) {
    this._name = setName;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
