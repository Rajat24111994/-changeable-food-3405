
let form= document.querySelector("form");
form.addEventListener("submit", myFun)
function myFun(e){
e.preventDefault;
let name= document.getElementById("input1").value;
let mobile= document.getElementById("input2").value;
let email= document.getElementById("input3").value;
let password= document.getElementById("input4").value;
let signup= JSON.parse(localStorage.getItem("login"))||[];
let obj={
    Name: name,
    Mob:mobile,
    Email:email,
    Pass:password
}
signup.push(obj);
let set= localStorage.setItem("signup", JSON.stringify(signup));   
}
