function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i < array.length; i++){
    const result1 = target-array[i];
    for(let j= i+1; j< array.length; j++){
      if(array[j] === result1) return true;

    }
  }
  return false;
  }
/* 
  Write the Big O time complexity of your function here
  linear  o(n) it  iterates through each element in an array
time:o(n^2) - it has used nested iteration
/* 
  Add your pseudocode here
iterate through each array
check wether the number and any other number in the array will result to our target.
continue to iterate and check if the other numbers will add up to target.
return true else false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  onsole.log("Expecting: true");
  console.log("=>", hasTargetSum([20, 19, 4, 6, 30], 50));

  console.log("");
  onsole.log("Expecting: false");
  console.log("=>", hasTargetSum([11, 8, 4,], 30));

  console.log("");

  onsole.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 70, 6, 30], 100));

  console.log("");
}

module.exports = hasTargetSum;
