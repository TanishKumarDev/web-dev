// Example: Promise Chaining

function step1() {
  return new Promise((resolve) => {
    console.log("Step 1: Starting task...");
    setTimeout(() => resolve("Step 1 completed"), 1000);
  });
}
function step2() {
  return new Promise((resolve) => {
    console.log("Step 2: Starting task...");
    setTimeout(() => resolve("Step 2 completed"), 1000);
  });
}
function step3() {
  return new Promise((resolve) => {
    console.log("Step 3: Starting task...");
    setTimeout(() => resolve("Step 3 completed"), 1000);
  });
}

// Chain Promises
step1()
  .then((result) => {
    console.log("Success: ", result);
    return step2();
  })
  .then((result) => {
    console.log("Success: ", result);
    return step3();
  })
  .then((result) => {
    console.log("Success: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Promise completed!");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
