'use strict';

const add = (x) => (y) => {
  const z = x + y;

  console.log(`${x} + ${y} = ${z}`);

  return add(z);
};

const a1 = add(5);
const a2 = a1(3);
const a3 = a2(2);
const a4 = a3(5);

console.log(a1, a2, a3, a4);

const res = add(5)(3)(2)(5);

console.log(res);
