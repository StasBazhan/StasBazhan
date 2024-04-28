const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
31,52,79,38,98,71,9,45,40,90,18,30,97,7,64,66,84,24,50,49,85,4,86,39,87,96,22,83,37,74,91,4,94,38,99,84,19,21,80,3,66,0,33,50,58,39,4,78,93,63,2,22,31,64,91,86,33,42,26,27,42,68,4,90,91,3,72,7,40,74,26,23,21,52,60,53,81,79,21,59,91,42,68,47,82,72,64 - 57,90,86,84,2,40,63,15,3,56,32,98,77,8,9,40,25,17,45,69,11,34,89,94,96,69,0,28,62,12,51,94,82,61,33,12,14,36,66,54,22,61,8,79,95,51,13,15,78,90,89,29,97,35,88,60,44,59,30,49
const reverseWords = str => str.split(" ").reverse().join(" ");
false / true
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
26 - 22
const squareRoot = num => Math.sqrt(num);
const formatDate = date => new Date(date).toLocaleDateString();
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

65 - 51,23,29,98,3,94,76,55,33,17,98,97,54,95,28,84,93,32,89,3,97,45,18,23,42,93,33,51,0,71,86,41,53,10
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
31,92,36,83,51,68,57,40,40,12,26,68,23,90,42,8,58,76,8,88,49,50,75,37,16,41,85 * false

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
