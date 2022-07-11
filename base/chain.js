'use strict';

const hash = () => {
  const data = {};

  Object.defineProperty(data, 'add', {
    enumerable: false,
    value(key, value) {
      data[key] = value;

      return data;
    }
  });

  return data;
};

console.dir(
  hash()
    .add('name', 'Ivan')
    .add('city', 'Roma')
);

const fn = (a) => (b) => (c) => a + b + c;

const f1 = fn(1);
const f2 = f1(2);
const res1 = f2(3);
const res2 = fn(1)(2)(3);

if (res1 === res2) {
  console.log('a + b + c =', res1);
}
