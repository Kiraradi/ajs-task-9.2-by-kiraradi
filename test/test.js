import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('test 1', () => {
  const testing = new ArrayBufferConverter();

  testing.load();

  expect(testing.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
