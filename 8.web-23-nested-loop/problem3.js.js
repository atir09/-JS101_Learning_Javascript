// Problem 3: Print a box patterns using *
let n = 10

for (i = 1; i <= n; i++) {
  let bag = ""
  for (j = 1; j <= 10; j++) {
    if (i == 1 || i == n) {
      bag = bag + "*"
    }else if (j==1 || j==10){
      bag+="*"
    }else{
      bag+=" "
    }
  }console.log(bag+"\n")

}