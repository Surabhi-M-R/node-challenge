// console.log('First');
// setTimeout(() => console.log('Third'), 0);
// Promise.resolve().then(() => console.log('Second'));
// console.log('Fourth');

import fs from 'fs';

// synchronous file read 

// console.log('1. Starting sync read...');
// const data = fs.readFileSync('myfile.txt', 'utf8');
// console.log('2. File contents:', data);
// console.log('3. Done reading file');

// asynchronous file read 
console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');  