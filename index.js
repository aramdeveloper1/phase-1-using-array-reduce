const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const solution = batteryBatches.reduce(acc, ell => {
  return acc + ell
}, 0)
console.log(solution)

// Code your solution here
