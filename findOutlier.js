function findOutlier(integers){

  let evenNum = integers.filter(int => int % 2 === 0)
  if (evenNum.length === 1) return evenNum[0]
  else return integers.filter(int => int % 2 !== 0)[0]

}
console.log(findOutlier([0,1,2]))
console.log(findOutlier([1, 2, 3]))
/*
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
} */

 /* Test.assertEquals(findOutlier([0, 1, 2]), 1)
  Test.assertEquals(findOutlier([1, 2, 3]), 2)
  Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
  Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
  Test.assertEquals(findOutlier([1,1,0,1,1]), 0)*/