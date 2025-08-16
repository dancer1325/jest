// 1. CommonJS
const {format: prettyFormat} = require('pretty-format');

// 2. ES2015 modules
//import {format as prettyFormat} from 'pretty-format';

// 3. 's input
// 3.1 prettyFormat(val)
const val = {object: {}};
val.circularReference = val;
val[Symbol('foo')] = 'foo';
val.map = new Map([['prop', 'value']]);
val.array = [-0, Infinity, NaN];

console.log(prettyFormat(val));

// 3.2 prettyFormat(val, options)
function onClick() {}         //  == function / POTENTIAL JS object

console.log(prettyFormat(onClick));                 // [Function onClick]

const options = {
  printFunctionName: false,
};
console.log(prettyFormat(onClick, options));        // [Function]
