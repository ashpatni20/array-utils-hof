const arr = [1, 2, 2, 3, 4, 5, 5, 6, [7, 8], [9, [10]]];

// 1. sum(arr)
const sum = (arr) => arr.flat(Infinity).reduce((total, num) => total + num, 0);
console.log("Sum:", sum(arr)); // Output: 60

// 2. unique(arr)
const unique = (arr) => [...new Set(arr.flat(Infinity))];
console.log("Unique:", unique(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 3. average(arr)
const average = (arr) => sum(arr) / arr.flat(Infinity).length;
console.log("Average:", average(arr)); // Output: 6

// 4. max(arr)
const max = (arr) => Math.max(...arr.flat(Infinity));
console.log("Max:", max(arr)); // Output: 10

// 5. min(arr)
const min = (arr) => Math.min(...arr.flat(Infinity));
console.log("Min:", min(arr)); // Output: 1

// 6. flatten(arr)
const flatten = (arr) => arr.flat(Infinity);
console.log("Flatten:", flatten(arr)); // Output: [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]

// 7. chunk(arr, size)
const chunk = (arr, size) => {
  const result = [];
  const flatArr = arr.flat(Infinity);
  for (let i = 0; i < flatArr.length; i += size) {
    result.push(flatArr.slice(i, i + size));
  }
  return result;
};
console.log("Chunk:", chunk(arr, 3)); // Output: [[1, 2, 2], [3, 4, 5], [5, 6, 7], [8, 9, 10]]

// 8. groupBy(arr, key)
const groupBy = (arr, key) => arr.flat(Infinity).reduce((acc, obj) => {
  const group = key instanceof Function ? key(obj) : obj[key];
  acc[group] = acc[group] || [];
  acc[group].push(obj);
  return acc;
}, {});
console.log("GroupBy:", groupBy(arr, num => num % 2 === 0 ? 'even' : 'odd')); // Output: { odd: [1, 3, 5, 5, 7, 9], even: [2, 2, 4, 6, 8, 10] }

// 9. zip(...arrays)
const zip = (...arrays) => {
  const length = Math.min(...arrays.map(arr => arr.length));
  return Array.from({ length }, (value, index) => arrays.map(arr => arr[index]));
};
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
console.log("Zip:", zip(arr1, arr2, arr3)); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// 10. partition(arr, predicate)
const partition = (arr, predicate) => arr.flat(Infinity).reduce(([pass, fail], elem) => (
  predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]
), [[], []]);
console.log("Partition:", partition(arr, num => num % 2 === 0)); // Output: [[2, 2, 4, 6, 8, 10], [1, 3, 5, 5, 7, 9]]


module.exports = {
    sum,
    unique,
    average,
    max,
    min,
    flatten,
    chunk,
    groupBy,
    zip,
    partition
}