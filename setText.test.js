const setText = require('./setText');

test('Set text', () => {
  const element = document.createElement('p');
  setText(element, 'Hello, World!');
  expect(element.textContent).toBe('Hello, World!');
});