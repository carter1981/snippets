'use strict';

const LOOP_COUNT = 10000;

const speedTest = (name, fn, args, count) => {
  const temp = [];
  const start = new Date().getTime();

  for (let i = 0; i < count; i++) {
    temp.push(fn(...args));
  }

  const end = new Date().getTime();
  const time = end - start;

  console.log(`${name} * ${temp.length} : ${time}`);
};

module.exports = {
  LOOP_COUNT,
  speedTest,
};
