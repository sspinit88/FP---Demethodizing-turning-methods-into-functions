import { demethodize3, demethodize2 } from './demethodize.ts';

console.log('EEEEE');

const name = 'FUNCTIONAL';
const map = demethodize3(Array.prototype.map);
const toUpperCase = demethodize2(String.prototype.toUpperCase);
const result2 = map(name, toUpperCase);

console.log(result2); // ["F", "U", "N", "C", "T", "I", "O", "N", "A", "L"]
