import { fibonacci } from '../index';

describe('assemblyscript-test', () => {
  test('fibonacci', () => {
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(20)).toBe(6765);
  });
});
