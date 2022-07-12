'use strict';

const wrap = (before, after, f) => (...args) => after(f(...before(...args)));

const func = (par1, par2) => {
  console.dir({ par1, par2 });
};

const before = (...args) => {
  console.log('Before');

  return args;
};

const after = (res) => {
  console.log('After');

  return res;
};

const wrapped = wrap(before, after, func);

const result = wrapped('One', 'Two');

console.dir({
  result,
  func: func.length,
  wrapped: wrapped.length,
});
