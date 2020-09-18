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

// display quantity and calculate cost

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function() {
        cartQty(products[i]);
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


//show numbers in cart

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function () {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  var productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector("#counter").textContent = productNumbers;
  }
}

// -----------------------------

function cartNumbers(product) {
  var productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#counter").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#counter").textContent = 1;
  }

  setItems(product);
}

// -----------------------------

function setItems(product) {
  var cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//calculate cost

function totalCost(product) {
    var cartCost = localStorage.getItem("totalCost");
    console.log("My cart cost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
        document.getElementById("cartOverview").html(
            `<h3>${product.name}</h3>
            <h3>${product.price}</h3>`
        );
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    localStorage.setItem("totalCost", product.price);
}

// -----------------------------

function displayCart() {
    var cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    var productContainer = document.querySelector("#products");
    var cartCost = localStorage.getItem("totalCost");

    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-item-wrapper">
                <div class="product">
                    <a href="#" class="remove-item">
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
            `;
        });

        productContainer.innerHTML += `
        <div class="basket-total-container container-fluid">
            <div class="row">
                <div class="basket-total-title uppercase col-sm">
                    <span>Cart Total: </span>
                </div>
                <div class="basket-total col-sm">
                    <span>£${cartCost}.00</span>
                </div>
            </div>
        </div>
        `;
    } else {
        productContainer.innerHTML += `
        <div class="cart-item-wrapper">
            <h2 class="empty-cart">Your cart is currently empty.</h2>
            <h6 class="back-to-shop-heading">
                <a href="shop.html" class="back-to-shop-link">Back to shop.</a>
            </h6>
        </div>
        `;
    }
}

// -----------------------------

let remove = document.querySelectorAll(".remove-item");

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function() {
        console.log("Removed from cart")
    })
}

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

function decreaseQuantity(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            item.inCart -= 1;
            if (item.inCart < 1) {
                products.splice(i, 1);
            }
            return;
        }
    }
}

function increaseQuantity(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            if (item.inCart >= 1) {
                products.push(i, 1);
            }
            return;
        }
    }
}

loadCartQty();
onLoadCartNumbers();
displayCart();
//removeFromCart();
decreaseQuantity();
increaseQuantity();