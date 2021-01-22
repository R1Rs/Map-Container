import ErrorRepository from '../Map';

test('test addError with key not a number from ErrorRepository', () => {
  const errorRepo = new ErrorRepository();
  const received = () => errorRepo.addError('ff', 'ошибка');
  const expected = 'ключ ошибки должен быть в числовом формате';

  expect(received).toThrow(expected);
});

test('test addError with value not a string from ErrorRepository', () => {
  const errorRepo = new ErrorRepository();
  const received = () => errorRepo.addError(1, 1);
  const expected = 'описание ошибки должно быть в текстовом формате';

  expect(received).toThrow(expected);
});

test('test translate metod from ErrorRepository', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.addError(1, 'ошибка номер один');
  const received = errorRepo.translate(1);
  const expected = 'ошибка номер один';

  expect(received).toBe(expected);
});

test('test Unknown error from ErrorRepository', () => {
  const errorRepo = new ErrorRepository();
  const received = errorRepo.translate(1);
  const expected = 'Unknown error';

  expect(received).toBe(expected);
});
