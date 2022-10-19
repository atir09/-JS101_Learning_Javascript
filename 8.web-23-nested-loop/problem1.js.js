//  Problem 1: Print the Calendar date in the below format

let day = 31
let month = 12
for (i = 1; i <= month; i++) {
  if (i == 2) {
    day = 28
  }else if (i==4 || i==6 || i==9 || i==11){
    day=30
  }else {
    day=31
  }for (j=1;j<=day;j++){
    console.log(j+"-"+i)
  }
}