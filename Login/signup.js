let signup= JSON.parse(localStorage.getItem("account-data"))||[];

let form= document.querySelector("form");
form.addEventListener("submit", (e)=>{
e.preventDefault();
let name= document.getElementById("input1").value;
let mobile= document.getElementById("input2").value;
let email= document.getElementById("input3").value;
let password= document.getElementById("input4").value;

let obj={
    Name: name,
    Mob:mobile,
    Email:email,
    Password:password

}
signup.push(obj);
 localStorage.setItem("account-data", JSON.stringify(signup)); 

 if ( name=="" || mobile=="" || email=="" || password=="" ){
    alert("please fill all details")
    }else{
      window.location.href= "login.html";
    }



});

