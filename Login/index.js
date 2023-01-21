 
 let url="https://63cae32cf36cbbdfc76280f7.mockapi.io/data";
 fetchData(url);
 async function fetchData(data){

    try{
        let res= await fetch(data);
        res=await res.json()
        // console.log(res)
        return DisplayData(res)
    } catch(err){
        console.log(err)
    }
 }
 let cartArr=JSON.parse(localStorage.getItem("cart"))||[];
 function DisplayData(data){

    let main= document.getElementById("main")
    
    

        data.forEach((ele) => {
    let container= document.createElement("div");
    container.setAttribute=("id","container");
   
    let image= document.createElement("img");
    image.src= ele.image;
    image.setAttribute=("id","image");

    let title= document.createElement("h3");
    title.innerText=ele.title;
    title.setAttribute=("id", "title")
    let disc= document.createElement("p");
    disc.innerText= ele.discription;
    disc.setAttribute=("id","disc")
    let price= document.createElement("h4");
    price.innerText= "₹"+ `${ele.price}`;
    price.setAttribute=("id","price");
    let category= document.createElement("h3");
    category.innerText= ele.category;
    category.setAttribute=("id","category")
    let button= document.createElement("button");
    button.textContent="Add To Cart";
    button.setAttribute=("id","button");
    button.addEventListener("click", ()=>{
        if (checkDuplicate(ele)){
            alert("Product Already in Cart")
        }else{
            cartArr.push({...ele, quantity:1})
            localStorage.setItem("cart",JSON.stringify(cartArr));
            alert("Product Added to Cart");

        }
       
    });
    
    container.append(image,title,disc,price,button);

    main.append(container);
    
});

}

function checkDuplicate(ele){
    for (let i=0; i<cartArr.length; i++){
        if (cartArr[i].id==ele.id){
            return true;
        }
    }
    return false;
}
