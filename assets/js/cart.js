// add items to cart

var carts = document.querySelectorAll(".add-item");

// grab product data

var products = [
  {
    name: "LB17 Black",
    tag: "lb17-white-logo-black-tee",
    price: 25,
    inCart: 0,
  },
  {
    name: "LB17 White",
    tag: "lb17-for-women",
    price: 25,
    inCart: 0,
  },
  {
    name: "Brick By Brick",
    tag: "brick-by-brick",
    price: 30,
    inCart: 0,
  },
  {
    name: "Bet On Yourself",
    tag: "bet-on-yourself",
    price: 30,
    inCart: 0,
  },
  {
    name: "Born2Excel Black",
    tag: "Born2Excel",
    price: 25,
    inCart: 0,
  },
  {
    name: "Born2Excel White",
    tag: "born2excel-white",
    price: 25,
    inCart: 0,
  },
  {
    name: "noMediocre",
    tag: "no-mediocre-hashtag",
    price: 25,
    inCart: 0,
  },
  {
    name: "Gym and weight training basics",
    tag: "gym-basics-cover",
    price: 6,
    inCart: 0,
  },
  {
    name: "Lockdown Fitness",
    tag: "lockdown-fitness-cover-large",
    price: 15,
    inCart: 0,
  }
];

// display items

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function() {
        cartQty(products[i]);
        cartTotal(products[i]);
    })
}

function loadCartQty() {
    var productQty = localStorage.getItem("cartQty");

    if (productQty) {
        document.querySelector("#counter").textContent = productQty;
    }
}

function cartQty(product) {
    var productQty = localStorage.getItem("cartQty");

    productQty = parseInt(productQty);

    if (productQty) {
        localStorage.setItem("cartQty", productQty + 1);
        document.querySelector("#counter").textContent = productQty + 1
    } else {
        localStorage.setItem("cartQty", 1);
        document.querySelector("#counter").textContent = 1
    }

    showInCart(product);
}

function showInCart(product) {
    var cartContents = localStorage.getItem("itemsInCart");
    cartContents = JSON.parse(cartContents);

    if (cartContents != null) {
        if (cartContents[product.tag] == undefined) {
            cartContents = {
                ...cartContents,
                [product.tag]: product
            }
        }
        cartContents[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartContents = {
            [product.tag]: product
        };
    };

    localStorage.setItem("itemsInCart", JSON.stringify(cartContents));
}

//calculate cost

function cartTotal(product) {
    var cost = localStorage.getItem("cartTotal");
    
    if (cost != null) {
        cost = parseFloat(cost); // try cost.parseFloat(2)
        localStorage.setItem("cartTotal", cost + product.price);
    } else {
        localStorage.setItem("cartTotal", product.price);
    }
}

// full cart

function loadCart() {
    var cartContents = localStorage.getItem("itemsInCart");
    cartContents = JSON.parse(cartContents);

    var cartContainer = document.querySelector("#products");

    var cost = localStorage.getItem("cartTotal");

    if (cartContents && cartContainer) {
        cartContainer.innerHTML = "";
        Object.values(cartContents).map(item => {
            cartContainer.innerHTML += `
                <div class="cart-item-wrapper">
                    <div class="product">
                        <a href="#" class="remove-item" onclick="removeFromCart()" data-name="${item.name}">
                            <i class="fas fa-times-circle"></i>
                        </a>
                        <img src="./assets/images/${item.tag}.png" alt="${item.name}" class="cart-item-thumbnail" />
                        <span>${item.name}</span>
                    </div>
                    <div class="price">
                        £${item.price}.00
                    </div>
                    <div class="quantity">
                        <a href="#" class="decrease" onclick="decreaseQuantity()">
                            <i class="fas fa-minus-square"></i>
                        </a>
                        <span>${item.inCart}</span>
                        <a href="#" class="increase" onclick="increaseQuantity()">
                            <i class="fas fa-plus-square"></i>
                        </a>
                    </div>
                    <div class="total">
                        £${item.inCart * item.price}.00
                    </div>
                </div>
            `
        });

        cartContainer.innerHTML += `
            <div class="basket-total-container container-fluid">
                <div class="row">
                    <div class="basket-total-title uppercase col-sm">
                        <span>Cart Total: </span>
                    </div>
                    <div class="basket-total col-sm">
                        <span>£${cost}.00</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        cartContainer.innerHTML += `
            <div class="cart-item-wrapper">
                <h2 class="empty-cart">Your cart is currently empty.</h2>
                <h6 class="back-to-shop-heading">
                    <a href="shop.html" class="back-to-shop-link">Back to shop.</a>
                </h6>
            </div>
        `;
    }
}

// remove items

var removeItem = document.querySelectorAll(".remove-item");

var remove = [];

for (let i = 0; i < remove.length; i++) {
    removeItem[i].addEventListener("click", function() {
        removeFromCart(remove[i]);
        //updateTotal();
    })
}

function removeFromCart(name) {
    var productQty = localStorage.getItem("cartQty");
    var itemRemoved = localStorage.getItem("removeFromCart");

    if (itemRemoved) {
        localStorage.setItem("removeFromCart", productQty > 0);
        document.querySelector(".product").textContent = "";
        document.querySelector(".price").textContent = "";
        document.querySelector(".quantity").textContent = "";
        document.querySelector(".total").textContent = "";
        $(".cart-item-wrapper").css("border-bottom", "none");
        $(".cart-item-wrapper").css("padding", "0");
    }
}

// -----------------------------

//let remove = document.querySelectorAll(".remove-item");

//for (let i = 0; i < remove.length; i++) {
  //  remove[i].addEventListener("click", function() {
    //    console.log("Removed from cart")
    //})
//}

//function removeFromCart(name) {
  //  cartItems.addEventListener("click", function() {
    //    for (let i = 0; i < products.length; i+= 1) {
      //      if (products[i].name === name) {
        //        products.splice(i, 1);
          //      return;
            //}
        //}
    //})
//}

//function decreaseQuantity(name) {
//    for (let i = 0; i < products.length; i++) {
  //      if (products[i].name === name) {
    //        item.inCart -= 1;
      //      if (item.inCart < 1) {
        //        products.splice(i, 1);
          //  }
            //return;
        //}
    //}
//}

//function increaseQuantity(name) {
//    for (let i = 0; i < products.length; i++) {
//        if (products[i].name === name) {
//            if (item.inCart >= 1) {
//                products.push(i, 1);
//            }
//            return;
//        }
//    }
//}

loadCartQty();
loadCart();