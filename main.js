import * as c1 from './lib/counter.js';
  
console.log("Info1:",c1.counter); // 1
c1.increment();
console.log("Info2:",c1.counter); // 2
c1.decrement();  
c1.decrement();  
console.log("Info3:",c1.counter); // 0  
