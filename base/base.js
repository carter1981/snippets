'use strict';

const adder = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.steps.push(value);
    this.value += value;

    return this;
  },
});

const Adder = class {
  constructor(initial = 0) {
    this.steps = [initial];
    this.value = initial;
  }

  add(value) {
    this.steps.push(value);
    this.value += value;

    return this;
  }
};

const { value, steps } = adder(5).add(-5).add(18);
const [a, b, c] = steps;

console.log(value);
console.log(a, b, c);
console.log(new Adder(10).add(5).add(5));
