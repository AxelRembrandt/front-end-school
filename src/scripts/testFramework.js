console.log("framework");

export function test(name, callback) {
  try {
    callback();
    console.log(
    `%cPASS%с - ${name}`,
      'background: green',
      'background: none'
    );
  } catch (e) {
    console.log(
      `%ERROR%с - ${name} : ${e.message}`,
      'background: green',
      'background: none'
    );
  }
}

export function exec(exp) {
  return {
    equal: equal.bind(exp)
  }
}

export function equal(value) {
  if (this !== value) {
    throw new Error(`expected ${value}, but ${this}`);
  }
}