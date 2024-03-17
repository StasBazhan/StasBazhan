const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
banana / true
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
banana - true

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const findLargestNumber = numbers => Math.max(...numbers);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
grape

const getRandomElement = array => array[getRandomIndex(array)];
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

apple - banana
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const isPalindrome = str => str === str.split("").reverse().join("");
// This is a comment
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
false - kiwi
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findLargestNumber = numbers => Math.max(...numbers);
false - kiwi

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
21 - banana
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
orange - grape
// This is a comment
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true / banana
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
61 - false
const findSmallestNumber = numbers => Math.min(...numbers);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
kiwi + true
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const findSmallestNumber = numbers => Math.min(...numbers);
banana


const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const isEven = num => num % 2 === 0;
grape

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const getRandomSubset = (array, size) => array.slice(0, size);
80,88,97,32,17,77,40,93,11,37,6,64,51,58,32,68,53,35,14,14,49,17,63,74,13,40,13,61,10,24 - kiwi
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
kiwi


class MyClass { constructor() { this.property = getRandomString(); } }
grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
true + apple
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const fetchData = async url => { const response = await fetch(url); return response.json(); }
false + false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const reverseWords = str => str.split(" ").reverse().join(" ");
false * true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const variableName = getRandomNumber();

75,28,47,43,56,52,81,15,27,78,44,53,58,85,1,48,50,8,90,97,85,38,68,30,12,70,66,91,87,5,99,99,78,44,50,18,7,38,25,9,66,17,98,96,27,3,53,92,58,29,25,9,84,90 - kiwi
const getRandomIndex = array => Math.floor(Math.random() * array.length);

