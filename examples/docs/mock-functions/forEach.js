// 1. ES modules
/*export function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}*/

// 2. COMMONJS modules
function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

module.exports = forEach;
