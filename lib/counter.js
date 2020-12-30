// lib/counter.js
export let counter = 1;

export function inc() {
  counter++;
}

export function dec() {
  counter--;
}

module.exports = {
    inc: increment,
    dec: decrement,
};
