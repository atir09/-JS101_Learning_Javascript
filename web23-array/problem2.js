// Problem 2 : Given a character in lower case print the upper case character
let charac= 'p'
arr_lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
arr_upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
for (i=0;i<arr_lower.length;i++){
  if (charac==arr_lower[i]){
    charac=arr_upper[i]
  }else{continue}
}console.log(charac)