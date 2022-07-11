'use strict';

const fs = require('fs');

// args[0] - key
// args[args.length - 1] - callback;

const memoizeAsync = (lib, fnName) => {
  const fn = lib[fnName];
  const cache = {};

  console.log('Override', fnName);

  lib[fnName] = (...args) => {
    console.dir({ call: fnName, args, cache });

    const callback = args.pop();
    const key = args[0];
    const record = cache[key];

    console.log('key: ',  key);
    console.log('cached: ', record);

    if (record) {
      console.log('from cache');

      callback(record.err, record.data);

      return;
    }

    fn(...args, (err, data) => {
      console.log('from file');
      console.log('Save key: ', key);

      cache[key] = { err, data };

      console.dir({ cache });

      callback(err, data);
    });
  };
};

memoizeAsync(fs, 'readFile');

fs.readFile('memoize-async.js', 'utf8', (err, data) => {
  console.log('data length', data.length);

  fs.readFile('memoize-async.js', 'utf8', (err, data) => {
    console.log('data length', data.length);
  });
});
