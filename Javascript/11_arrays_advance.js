```javascript
// File: 02_basics/02_arrays.js
// Purpose: Practice advanced JavaScript array methods

// Array Declaration
let marvelHeroes = ["Thor", "Ironman", "Spiderman"];
let dcHeroes = ["Superman", "Flash", "Batman"];

// push (adds array as nested element)
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); // Output: ["Thor", "Ironman", "Spiderman", ["Superman", "Flash", "Batman"]]
console.log(marvelHeroes[3][0]); // Output: "Superman"
// Reset marvelHeroes
marvelHeroes = ["Thor", "Ironman", "Spiderman"];

// concat (returns new array)
let allHeroesConcat = marvelHeroes.concat(dcHeroes);
console.log(allHeroesConcat); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]
console.log(marvelHeroes); // Output: ["Thor", "Ironman", "Spiderman"] (unchanged)

// Spread Operator (merges into new array)
let allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log(allHeroesSpread); // Output: ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

// flat (flattens nested arrays)
let realAnotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let flatArr = realAnotherArr.flat(Infinity);
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Array.isArray
let name = "Tanish";
console.log(Array.isArray(name)); // Output: false
console.log(Array.isArray(marvelHeroes)); // Output: true

// Array.from
console.log(Array.from(name)); // Output: ["H", "i", "t", "e", "s", "h"]
let obj = { name: "Tanish" };
console.log(Array.from(obj)); // Output: []
console.log(Array.from(Object.keys(obj))); // Output: ["name"]
console.log(Array.from(Object.values(obj))); // Output: ["Tanish"]

// Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

// Reference: MDN for Array Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
```