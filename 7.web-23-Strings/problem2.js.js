// Problem 2 : Given an array of string count the overall total number of characters

let arr=["Bruce","Wayne","Gowtham","Christian Bale",""]
sum=0
for (i=0;i<arr.length;i++){
  sum+=arr[i].length
}console.log("The number of characters are",sum)