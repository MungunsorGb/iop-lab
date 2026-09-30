const defaults = { theme: "light", lang: "mn" };
const userSettings = { lang: "en" };

const merged = { ...defaults, ...userSettings };

console.log(merged);
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

console.log(multiply(2, 3, 4)); 
console.log(multiply(5, 2));   

