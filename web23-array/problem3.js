// Problem 3 : Given an array of numbers find the average of all the even numbers.
arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0
let count=0
let i=0
while(i<arr.length){
  if (arr[i]%2==0){
    sum+=arr[i]
    count++
  }i++
}console.log(sum/count)
