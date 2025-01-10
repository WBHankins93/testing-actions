import greet from "../index.js";

test('prints Hello, Github Actions!', () => {
    console.log = jest.fn();
    greet('Github Actions');
    expect(console.log).toHaveBeenCalledWith('Hello, Github Actions!');
  });

  test('greet function', () => {
    expect(greet('World')).toBe('Hello, World');
  });