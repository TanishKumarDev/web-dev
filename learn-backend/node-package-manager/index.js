const _ = require('lodash');  // Purpose: Import Lodash (via require, as it's a module)

const names = ['john', 'alex', 'mia'];  // Sample array
const capitalized = _.map(names, _.capitalize);  // Purpose: Transform array (capitalize each name)

console.log(capitalized);  // Output: ['John', 'Alex', 'Mia']