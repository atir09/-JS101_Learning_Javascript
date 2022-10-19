// Given a string print, the number of times each character appears
let string="Bruce Wayne"
let char={}
for (i=0;i<string.length;i++){
    if (char[string[i]]===undefined){
      char[string[i]]=1
    }else {
      char[string[i]]+=1
    }
}console.log(char)