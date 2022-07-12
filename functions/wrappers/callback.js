'use strict';

const wrapAsync = (before, after, beforeCb, afterCb, f) =>
  (...args) => {
    const callback = args[args.length - 1];

    if (typeof callback === 'function') {
      args[args.length - 1] = (...pars) =>
        afterCb(callback(...beforeCb(...pars)));
    }

    return after(f(...before(...args)));
  };
