// Problem 1 : Given a string count the number of words in that string

str="Bruce Wayne is the prince of Gowtham"
count=0
if (str.length!=0){
  for (i=0;i<str.length;(i++)){
    if (str[i]==" "){
      count++;
    }
  }console.log("The number of words are",++count)
}else {
  console.log("The number of words are",count)
}