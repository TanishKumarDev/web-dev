// ==========================================
// 1. Arithmetic Operators
// ==========================================

let a = 10, b = 3;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("++a =", ++a);
console.log("b-- =", b--); // then becomes 2

console.log("\n");

// ==========================================
// 2. Assignment Operators
// ==========================================

let x = 5;
console.log("Assignment Operators:");
x += 2;
console.log("x += 2 =", x);
x -= 1;
console.log("x -= 1 =", x);
x *= 2;
console.log("x *= 2 =", x);
x /= 3;
console.log("x /= 3 =", x);
x %= 3;
console.log("x %= 3 =", x);
x **= 3;
console.log("x **= 3 =", x);

console.log("\n");

// ==========================================
// 3. Comparison Operators
// ==========================================

let m = 5, n = '5';
console.log("Comparison Operators:");
console.log("m == n =", m == n);
console.log("m === n =", m === n);
console.log("m != n =", m != n);
console.log("m !== n =", m !== n);
console.log("m > 4 =", m > 4);
console.log("m < 4 =", m < 4);
console.log("m >= 5 =", m >= 5);
console.log("m <= 3 =", m <= 3);

console.log("\n");

// ==========================================
// 4. String Operators
// ==========================================

let first = "Hello", second = "World";
console.log("String Operators:");
console.log("first + ' ' + second =", first + ' ' + second);

let str = "JS";
str += " Rocks!";
console.log("str += ' Rocks!' =", str);

console.log("\n");

// ==========================================
// 5. Logical Operators
// ==========================================

let p = true, q = false;
console.log("Logical Operators:");
console.log("p && q =", p && q);
console.log("p || q =", p || q);
console.log("!p =", !p);
console.log("!q =", !q);

console.log("\n");

// ==========================================
// 6. Bitwise Operators
// ==========================================

let bitA = 5, bitB = 3;
console.log("Bitwise Operators:");
console.log("bitA & bitB =", bitA & bitB);
console.log("bitA | bitB =", bitA | bitB);
console.log("bitA ^ bitB =", bitA ^ bitB);
console.log("~bitA =", ~bitA);
console.log("bitA << 1 =", bitA << 1);
console.log("bitB >> 1 =", bitB >> 1);

console.log("\n");

// ==========================================
// 7. Ternary Operator
// ==========================================

let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Operator:");
console.log("status =", status);

console.log("\n");

// ==========================================
// 8. Type Operators
// ==========================================

console.log("Type Operators:");
console.log("typeof 123 =", typeof 123);
console.log("typeof 'JS' =", typeof 'JS');
console.log("typeof true =", typeof true);
console.log("typeof [] =", typeof []);
console.log("typeof {} =", typeof {});
console.log("typeof null =", typeof null);
console.log("typeof undefined =", typeof undefined);

console.log("[] instanceof Array =", [] instanceof Array);
console.log("{} instanceof Object =", {} instanceof Object);
console.log("new Date() instanceof Date =", new Date() instanceof Date);



// ==========================================
// 9. Unary Operators
// ==========================================

let aNum= 5;
console.log(aNum, --aNum, aNum++, aNum);