// Given an array find the unique items in the array
let party_members=["Batman","superman","Batman","Spiderman","Bruce Wayne","superman"]
unique_list={}
for(i=0;i<party_members.length;i++){
  key=party_members[i]
  unique_list[key]=1
  
}
console.log(unique_list)