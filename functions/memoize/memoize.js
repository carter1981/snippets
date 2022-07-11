'use strict';

const { speedTest, LOOP_COUNT } = require('../speed-test');

// Without cache size control

const argKey = (x) => `${x.toString()}:${typeof x}`;
const generateKey = (args) => args.map(argKey).join('|');

const memoize = (fn) => {
  const cache = Object.create(null);

  return (...args) => {
    const key = generateKey(args);
    const val = cache[key];

    if (val) return val;

    const res = fn(...args);

    cache[key] = res;

    return res;
  };
};

const sumSeq = (a, b) => {
  console.log('Calculate sum');

  let r = 0;

  for (let i = a; i < b; i++) r += i;

  return r;
};

const memoSumSeq = memoize(sumSeq);

console.log('First call memoSumSeq(2, 5)');
console.log('Value: ', memoSumSeq(2, 5));

console.log('Second call memoSumSeq(2, 5)');
console.log('Cache: ', memoSumSeq(2, 5));

const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
const mFib = memoize(fib);

speedTest('fib(20)', fib, [20], LOOP_COUNT);
speedTest('memoized fib(20)', mFib, [20], LOOP_COUNT);
