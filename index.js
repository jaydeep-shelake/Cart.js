const cart = document.getElementById('cart');
const shoppingCart = document.getElementById('shopping-cart');
const cartItem= document.querySelectorAll('.cart-item');
let cartScreen = document.getElementById('cart-screen');
let total = document.getElementById('total');
const msg =document.querySelector('.msg');
const totalCartItem = document.querySelector('.cart-total-item');
let num=0;
cart.addEventListener('click',()=>{
   shoppingCart.classList.toggle('hide');
   
   
   
});


for(let items of cartItem){
    items.addEventListener('click',(e)=>{
    

        if(e.target.parentElement.className =='cart-item'){  //select only parent elemnt
            let imgFullPath=e.target.parentElement.parentElement.previousElementSibling.src;
            let itemPrice = e.target.parentElement.previousElementSibling.innerText
            let itemName = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            console.log(parseFloat(itemPrice)); 
            console.log(itemName);
            let str=`<img src="${imgFullPath}" alt="" style="width: 55px;">
             <div class="discription">
                Name: ${itemName} <br>
                Price:<p class="cartprice"> ${itemPrice} </p>
            </div>
            </div> <hr style="border-width: 1px; width:100%; margin-bottom:4px;">`

            cartScreen.innerHTML+=str;

            msg.classList.add('view');

            setTimeout(()=>{
             msg.classList.remove('view');
            },1000);

            num++;
            totalCartItem.innerHTML=num;
            showTotal();
            
        }
    })
}

function showTotal(){
    const totalCart =[];
     let cartprice = document.querySelectorAll('.cartprice')
     
     cartprice.forEach((item)=>{
         totalCart.push(parseFloat(item.innerText.slice(0,-2)))
     })
        
const totalMoney = totalCart.reduce((totalprice,item)=>{
   totalprice+=item  
  return totalprice;

},0);
     
        console.log('total',totalMoney);
    
    console.log(totalCart);

    total.innerText=totalMoney;
    
    
}



const closeCart = document.getElementById('close');
closeCart.addEventListener('click',()=>{
    shoppingCart.classList.remove('hide');
})


const burger = document.querySelector('.burger');
burger.addEventListener('click',()=>{
    const navBar = document.querySelector('.nav-bar');
    const ul = document.querySelector('.ul');
    navBar.classList.toggle('height');
    ul.classList.toggle('show');
     
})
         

