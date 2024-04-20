const name = "sneha"
const repoCount = 50

// console.log(name + repoCount + " Value");
// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sneha-sp-com')

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

let newString = gameName.substring(0, 4)
// console.log(newString); => sneh

let newString1 = gameName.slice(0,4)
console.log(newString1);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sneha    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sneha.com/sneha%20pawar"
console.log(url.replace('%20', '-'))
console.log(url.includes('sne'))
console.log(gameName.split('-'));