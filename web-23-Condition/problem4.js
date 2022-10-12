//Given stored username and password and input username and password, Print if the user can login or not.
let database_username="123@gmail.com"
let database_password="45678qwer"
let username="123@gmail.com"
let password="45678qwer"
if (username==database_username){
  if (password==database_password){
    console.log("Login Successful")
  }else{
    console.log("Incorrect Password")
  }
}else{
  console.log("Wrong Credentials")
}