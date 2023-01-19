


let run= document.getElementById("sub");
run.addEventListener("click",fun);

function fun(e){
    e.preventDefault;

    let text=document.getElementById("h1");
    let ema= document.getElementById("email");
    let pass= document.getElementById("password");
    let getdata= JSON.parse(localStorage.getItem("login"))||[];
     getdata.forEach(ele => {
        if (ema.value==ele.Email && pass.value==ele.Password){
           text.innerText="Login Successful"
        }else{
            text.innerText= "Wrong Credentials"
        }
    });
}
