// 1. JavaScript for Loop
console.log("For Loop");
for(let i = 1; i <= 5; i++){
  console.log("Count: ", i);
}

// 2. JavaScript while Loop
console.log("While Loop");
let count = 1;
while(count <= 5){
  console.log("Count: ", count);
  count++;
}

// 3. JavaScript do-while Loop
console.log("Do While loop");
let count2 = 1;
do{
  console.log("Count: ", count2);
  count2++;
}while(count2 <= 5);

// 4. JavaScript for-in Loop
console.log("For-in Loop");
const obj = {name: "Tanish", age: 21, isStudent: true};
for(let key in obj){
  console.log("Key: ", key);
  console.log("Value: ", obj[key]);
}