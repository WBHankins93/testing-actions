import { greet } from '../index.js';

test('prints Hello, GitHub Actions!', () => {
  console.log = jest.fn();
  greet('GitHub Actions');
});

test('greet function', () => {
  expect(greet('World')).toBe('Hello, World!');
});