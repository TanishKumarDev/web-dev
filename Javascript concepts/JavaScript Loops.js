// 1. JavaScript for Loop
{
  for (let i = 1; i < 5; i++) {
    console.log(i);
  }
}
// 2. JavaScript while Loop
{
  let i = 0;
  while (i < 5) {
    console.log("Number: ", i);
    i++;
  }
}
// 3. JavaScript do-while Loop
{
  let i = 0;
  do {
    console.log("Iteration:", i);
    i++;
  } while (i < 5);
}

// 4. JavaScript for-in Loop
{
    const obj = {name: "Tanish", age: 25};
    for (let key in obj) {
        console.log(key, obj[key]);
    }
}

// 5. JavaScript for-of Loop
{
    let a  = [1, 2, 3];
    for (let value of a) {
        console.log(value);
    }
}