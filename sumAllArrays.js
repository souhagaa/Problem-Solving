/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr, sum) {
    var sum = sum || 0
    for (var i=0; i<arr.length; i++ ){
      if(Array.isArray(arr[i])){
        return arraySum(arr[i], sum)
      }
      else if(typeof arr[i] === "number") {
        sum += arr[i]
      }
      
    }
    return sum
  }

console.log(arraySum([1,2,[1,2,[1,2,3]]]) === 12)
console.log(arraySum([1,2, "hey"]) === 3)