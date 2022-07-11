'use strict';

const cities = ['Roma', 'London', 'Minsk'];
const f = (s) => s.length;

function f1() {
  const cities = ['Riga', 'Roma'];
  const f = (s) => s.toUpperCase();

  console.dir({ cities });
  console.dir(cities.map(f));

  {
    const cities = ['London', 'Minsk'];

    console.dir({ cities });
    console.dir(cities.map(f));
  }
}

f1();

console.dir({ cities });
console.dir(cities.map(f));




