// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let limit=100
let x=1;
sum=0
n=0
while(x<=100){
 if (x%2==0){
   sum+=x;
   n+=1
 } 
  x++;
}
console.log(sum/n)