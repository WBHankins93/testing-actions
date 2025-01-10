test('prints Hello, World!', () => {
    console.log = jest.fn();
    require('../index');
    expect(console.log).toHaveBeenCalledWith('Hello, World!');
  });