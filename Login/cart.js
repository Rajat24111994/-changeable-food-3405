let cartItem= JSON.parse(localStorage.getItem("cart"))||[];
let main= document.getElementById("main");
let total=document.getElementById("myTotal");
displayCart(cartItem);

function displayCart(data){
main.innerHTML="";
data.forEach((ele,ind) => {
    let div= document.createElement("div");
    let title= document.createElement("h3");
    title.innerText=ele.title;
    let image= document.createElement("img");
    image.src=ele.image;
    let category= document.createElement("h3");
    category.innerText=ele.category;
    let price= document.createElement("h2");
    price.innerText= "₹" + `${ele.price}`;
    let div2= document.createElement("div");
    let plus= document.createElement("button");
    plus.innerText="+";
    plus.addEventListener("click",()=>{
        ele.quantity++;
        displayCart(data)
        localStorage.setItem("cart",JSON.stringify(data));
    });
    let quantity= document.createElement("h5");
    quantity.innerText=ele.quantity;
    let minus= document.createElement("button");
    minus.innerText="-";
    minus.addEventListener("click",()=>{
        if(ele.quantity>1){
            ele.quantity--;
        }
        
        displayCart(data)
        localStorage.setItem("cart",JSON.stringify(data));
    });
    let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.addEventListener("click",()=>{
        data=data.filter((element,index)=>{
            if(index==ind){
                return false;
            }else{
                return true;
            }
        })
        displayCart(data);
        localStorage.setItem(("cart"),JSON.stringify(data));
    })
    div2.append(plus,quantity,minus,remove)
    div.append(image,title,category,price,div2)

    main.append(div);
});
let sum=0;
for(let i=0;i<data.length;i++){
    sum+=data[i].price*data[i].quantity;
}
total.innerText=sum;
}