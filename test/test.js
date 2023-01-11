import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('test 1', () => {
  const testing = new ArrayBufferConverter();

  testing.load();

  expect(testing.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('test 2', () => {
  const testing = new ArrayBufferConverter();

  expect(() => {
    testing.toString();
  }).toThrow();
});
