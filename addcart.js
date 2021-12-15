let carts =  document.querySelectorAll('.productcart');


let products = [
    {
        name : "blackshirt",
        tag : "Lost in space",
        price : 600,
        inCart : 0
    },
    
    {
        name : "whiteshirt",
        tag : "Lost in space2",
        price : 600,
        inCart: 0
    },

    {
        name : "shirtDirtywhite",
        tag : "Sould Driven ",
        price : 650,
        inCart : 0
    },
    {
        name : "pants",
        tag : "GrayPants",
        price : 700,
        inCart : 0
    },
    {
        name : "pants2",
        tag : "blackpants",
        price : 700,
        inCart : 0
    },
    {
        name : "plainblack",
        tag : "Otee plain Black",
        price : 500,
        inCart : 0
    },
    {
        name : "plainwhite",
        tag : "Otee plain white",
        price : 500,
        inCart :0
    },
    {
        name : "longsleeve",
        tag :'Black longsleeve',
        price : 550,
        inCart : 0
    },
    {
        name : "Shoes",
        tag : "running Shoes",
        price : 1000,
        inCart : 0
    },
];

for (let i=0; i < carts.length; i++  )
{
    carts[i].addEventListener('click' , () => {
        cartNumbers(products[i])
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) 
    {
        document.querySelector('.cart-container span ').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers )
    {
        localStorage.setItem('cartNumbers' , productNumbers + 1);
        document.querySelector('.cart-container span ').textContent = productNumbers + 1;
    }
    else
    {
        localStorage.setItem('cartNumbers' ,  1);
        document.querySelector('.cart-container span ').textContent = 1;
    }
    setItems(product);   
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
   
    if(cartItems != null)
    {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } 
    else
    {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
      (cartItems));
}

function totalCost(products){
    let cartCost = localStorage.getItem('totalCost');
    

    console.log("My CartCost is ", cartCost);
    console.log(typeof cartCost);
	
    if(cartCost != null){
		cartCost= parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        products.price);
    }
    else{
        localStorage.setItem("totalCost", products.price);
    }

}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    
    
    console.log(cartItems)
    if(cartItems && productContainer  ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
    <div class="align">
        <div class="product">
            <i class="fa fa-times-circle" aria-hidden="true"></i>
            <img src="./images/${item.name}.jpg" width="30%">
                 <span>${item.name}</span>
        </div>

        <div class="price">
                 PHP ${item.price},00
        </div>
        <div class="quantity">
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
            <span>${item.inCart}</span>
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </div>
        <div class="total">
                PHP ${item.inCart * item.price}.00
        </div>
            </div>
            
       
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Cart Total:
                </h4>
                <h4 class="basketTotal">
                    PHP${cartCost},00
                </h4>
            </div>

        `;
    }

}

onLoadCartNumbers();
displayCart();