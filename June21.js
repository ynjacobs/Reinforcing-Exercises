const tasks = ["laundry", "shovel driveway", "grocery shopping", "check email", "daydream", "phone parents", "fill prescription", "exercise", "take out recycling", "check the weather"];
console.log("Sunday To Do List:");


for(let i = 0; i < tasks.length; i++) {
  let msg = `${i}: ${tasks[i]}`;
  console.log(msg);
}

// We the output should be:

// Sunday To Do List:
// 1: laundry
// 2: shovel driveway
// 3: grocery shopping
// 4: check email
// 5: daydream
// 6: phone parents
// 7: fill prescription
// 8: exercise
// 9: take out recycling
// 10: check the weather