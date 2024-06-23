/**
 * @param {function[]} functions
 *
 * @returns {function}
 */

'use strict';

function chainer(functions) {
  return (x) => {
    let result = x;

    for (const f of functions) {
      result = f(result);
    }

    return result;
  };
}

module.exports = { chainer };
