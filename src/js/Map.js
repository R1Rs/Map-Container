export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }

  addError(key, value) {
    if (typeof (key) !== 'number') {
      throw new Error('ключ ошибки должен быть в числовом формате');
    } else if (typeof (value) !== 'string') {
      throw new Error('описание ошибки должно быть в текстовом формате');
    } else {
      this.errors.set(key, value);
    }
  }
}
