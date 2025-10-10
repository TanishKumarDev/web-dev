type ID = number | string; // Now, instead of writing number | string everywhere, you can simply use ID.

// BASIC TYPE ALIASES

// define 
type typeAlias = number | string | boolean; 

// variable can hold only allowed types
let variable: typeAlias;

variable = 1;
console.log(variable)

variable = "Tanish";
console.log(variable)

variable = true;
console.log(variable)
