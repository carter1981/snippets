'use strict';

const EventEmitter = require('./simple');

const ee = new EventEmitter();

ee.on('event1', (data) => {
  console.dir({ data });
});

ee.emit('event1', { a: 5 });
ee.emit('event1', { name: 'Ivan', city: 'Roma' });
