'use strict';

const emitter = require('./enhanced');

const ee = emitter();

ee.on('event2', (data) => {
  console.log('Certain event');
  console.dir({ data });
});

ee.on('*', (name, data) => {
  console.log('Any event');
  console.dir([name, data]);
});

ee.emit('event1', { a: 5 });
ee.emit('event2', { a: 500 });
ee.emit('*', { a: 700 });
