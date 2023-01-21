// let display_Name="";





let email= document.getElementById("email");
let password = document.getElementById("password");
document.querySelector("#loginform").addEventListener("submit", (e)=>{
  e.preventDefault();

  let Getdata = JSON.parse(localStorage.getItem("account-data"))||[];
  let flag1=false;
  let flag2=false;
  Getdata.forEach((element) => {
    if ((email.value== element.Email) && (password.value== element.Password)){
   // document.getElementById("login").innerText=element.name;
      flag1=true;
      flag2=true;
      // display_Name=element.Name;
    }
    
    
  });

  if ( email.value =="" || password.value=="" ){
    alert("please fill all details")
}else{




  if (flag1 && flag2){
      alert("Redirecting to the main page")
     window.location.href= "index.html"
  }else{
    alert("Wrong Credentials")
  }
 
}

 
 
  
});

// let user_Name= localStorage.setItem("UserName", display_Name);
// console.log(user_Name)