import { foo, baz } from './class.js'
import { test, exec } from './testFramework.js';

console.log("test");
console.log(foo());
console.log(baz());

test('testing foo', () => {
  exec(foo().equal(5));
})

test('testing baz', () => {
  exec(baz().equal(2));
})
