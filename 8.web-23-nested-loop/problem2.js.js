// Problem 2: Print Prime Numbers from 1 to given limit

let limit=50
for (i=1;i<=50;i++){
  count=0
  for (j=1;j<=i;j++){
    if (i%j==0){
      count++
    }
  }if (count==2){
    console.log(i,"is a Prime Number")
  }else{
    console.log(i,"is not a Prime Number")
  } 
}