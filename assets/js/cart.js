var carts = document.querySelectorAll(".add-item");

// retrieves data of store items

var products = [
  {
    name: "LB17 Black",
    tag: "lb17black",
    price: 25,
    inCart: 0,
  },
  {
    name: "LB17 White",
    tag: "lb17white",
    price: 25,
    inCart: 0,
  },
  {
    name: "Brick By Brick",
    tag: "brickbybrick",
    price: 30,
    inCart: 0,
  },
  {
    name: "Bet On Yourself",
    tag: "betonyourself",
    price: 30,
    inCart: 0,
  },
  {
    name: "Born2Excel Black",
    tag: "born2excelblack",
    price: 25,
    inCart: 0,
  },
  {
    name: "Born2Excel White",
    tag: "born2excelwhite",
    price: 25,
    inCart: 0,
  },
  {
    name: "nomediocre",
    tag: "nomediocre",
    price: 25,
    inCart: 0,
  },
  {
    name: "Gym and weight training basics",
    tag: "gymandweighttrainingbasics",
    price: 6,
    inCart: 0,
  },
  {
    name: "Lockdown Fitness",
    tag: "lockdownfitness",
    price: 15,
    inCart: 0,
  }
];

// adds items to cart

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function() {
        cartQty(products[i]);
        cartTotal(products[i]);
        displayAlert();
    });
}

// generates confirmation alert when add to cart button is clicked

function displayAlert() {
    var addedToCartAlert = document.querySelector(".content");
        
    addedToCartAlert.innerHTML += `
        <div class="alert-container container-fluid">
            <div class="alert-success added-to-cart-alert">
                Item successfully added to cart!
            </div>                
        </div>
    `;
    $(".alert-container").fadeOut(4500);
}

// displays running counter of items in cart

function loadCartQty() {
    var productQty = localStorage.getItem("cartQty");

    if (productQty) {
        document.querySelector("#counter").textContent = productQty;
    }
}

// increases or decreases counter

function cartQty(product, action) {
    var productQty = localStorage.getItem("cartQty");

    productQty = parseInt(productQty);

    var cartContents = localStorage.getItem("itemsInCart");
    cartContents = JSON.parse(cartContents);

    if (action == "decrease") {
        localStorage.setItem("cartQty", productQty - 1);
        document.querySelector("#counter").textContent = productQty - 1;
    } else if (productQty) {
        localStorage.setItem("cartQty", productQty + 1);
        document.querySelector("#counter").textContent = productQty + 1;
    } else {
        localStorage.setItem("cartQty", 1);
        document.querySelector("#counter").textContent = 1;
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
            };
        }
        cartContents[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartContents = {
            [product.tag]: product
        };
    }

    localStorage.setItem("itemsInCart", JSON.stringify(cartContents));
}

// adjusts cost of cart when items removed or added

function cartTotal(product, action) {
    var cost = localStorage.getItem("cartTotal");
    if (action == "decrease") {
        cost = parseFloat(cost);
        localStorage.setItem("cartTotal", cost - product.price);
    } else if (cost != null) {
        cost = parseFloat(cost);
        localStorage.setItem("cartTotal", cost + product.price);
    } else {
        localStorage.setItem("cartTotal", product.price);
    }
}

// displays full cart contents and calculates total price

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
                        <a href="#" class="remove-item">
                            <i class="fas fa-times-circle"></i>
                        </a>
                        <img src="./assets/images/${item.tag}.png" alt="${item.name}" class="cart-item-thumbnail" onmouseover="displayName()" onmouseOut="hideName()" />
                        <div id="popup"></div>
                        <span class="item-text">${item.name}</span>
                        <span class="sr-only">${item.name}</span>
                    </div>
                    <div class="price">
                        £${item.price}.00
                    </div>
                    <div class="quantity">
                        <a href="#" class="decrease-qty">
                            <i class="fas fa-minus-square"></i>
                        </a>
                        <span>${item.inCart}</span>
                        <a href="#" class="increase-qty">
                            <i class="fas fa-plus-square"></i>
                        </a>
                    </div>
                    <div class="total">
                        £${item.inCart * item.price}.00
                    </div>
                </div>
            `;
            function displayName() {
                var namePopup = document.getElementById("popup");
                namePopup.innerHTML += `<span>${item.name}</span>`;
            }

            function hideName() {
                var namePopup = document.getElementById("popup");
                namePopup.innerHTML = "";
            }
        });

        cartContainer.innerHTML += `
            <div class="cart-total-wrapper">
                <div class="cart-total-heading uppercase">
                    <span>Cart Total: </span>
                </div>
                <div class="cart-total-price">
                    <span>£${cost}.00</span>
                </div>
            </div>
        `;

        cartContainer.innerHTML += `
            <div class="row vat-info">
                <div class="col-sm">
                    <span class="small-print">
                        <small>All prices are inclusive of VAT at 20&#37;</small>
                    </span>
                </div>
            </div>
        `;

        cartContainer.innerHTML += `
            <div class="row">
                <div class="col-sm checkout-button">
                    <button class="btn btn-checkout btn-success" onclick="completePurchase()">
                        <a href="#">
                            <span>Checkout</span>
                        </a>
                    </button>
                </div>
                <div class="col-sm continue-shopping-button">
                    <button class="btn btn-continue-shopping btn-dark">
                        <a href="shop.html">
                            <span>Continue Shopping</span>
                        </a>
                    </button>
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
    removeFromCart();
    changeQty();
}

// remove items from cart

//function removeFromCart() {   
//    var removeItem = document.querySelectorAll(".remove-item");
//    var itemName;
//    var totalUnits = localStorage.getItem("cartQty");
//    var cartContents = localStorage.getItem("itemsInCart");
//    cartContents = JSON.parse(cartContents);
//    var cost = localStorage.getItem("cartTotal");

//    for (let i = 0; i < removeItem.length; i++) {
//        removeItem[i].addEventListener("click", function() {
//            itemName = removeItem[i].parentElement.textContent.trim().toLocaleLowerCase().replace(/ /g, "");
//            localStorage.setItem("cartQty", totalUnits - cartContents[itemName].inCart);
//            localStorage.setItem("cartTotal", cost - (cartContents[itemName].price * cartContents[itemName].inCart));

//            delete cartContents[itemName];
//            localStorage.setItem("itemsInCart", JSON.stringify(cartContents));

//            loadCart();
//            loadCartQty();
//        });
//    }
//}

function removeFromCart() {
    var removeItem = document.querySelectorAll(".remove-item");
    var itemName;
    var totalUnits = localStorage.getItem("cartQty");
    var cartContents = localStorage.getItem("itemsInCart");
    cartContents = JSON.parse(cartContents);
    console.log(cartContents);

    for (let i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener("click", function() {
            itemName = removeItem[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, "");
            console.log(itemName);
            console.log(cartContents[itemName].name);
            //localStorage.setItem("cartQty", totalUnits - cartContents[itemName.inCart]);
        });
    }
}

// increases and decreases quantity of an item already in cart

function changeQty() {
    var decreaseQty = document.querySelectorAll(".decrease-qty");
    var increaseQty = document.querySelectorAll(".increase-qty");
    var cartContents = localStorage.getItem("itemsInCart");
    var newQty = 0;
    var selectedItem = "";

    cartContents = JSON.parse(cartContents);

    for (let i = 0; i < decreaseQty.length; i++) {
        decreaseQty[i].addEventListener("click", function() {
            newQty = decreaseQty[i].parentElement.querySelector("span").textContent;
            selectedItem = decreaseQty[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent.toLocaleLowerCase().replace(/ /g, "").trim();

            if (cartContents[selectedItem].inCart > 1) {
                cartContents[selectedItem].inCart -= 1;
                cartQty(cartContents[selectedItem], "decrease");
                cartTotal(cartContents[selectedItem], "decrease");
                localStorage.setItem("itemsInCart", JSON.stringify(cartContents))
                loadCart();
            }            
        });
    }

    for (let i = 0; i < increaseQty.length; i++) {
        increaseQty[i].addEventListener("click", function() {
            newQty = increaseQty[i].parentElement.querySelector("span").textContent;
            selectedItem = increaseQty[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent.toLocaleLowerCase().replace(/ /g, "").trim();

            if (cartContents[selectedItem].inCart > 0) {
                cartContents[selectedItem].inCart += 1;
                cartQty(cartContents[selectedItem], "increase");
                cartTotal(cartContents[selectedItem], "increase");
                localStorage.setItem("itemsInCart", JSON.stringify(cartContents))
                loadCart();
            }
        })
    }
}

loadCartQty();
loadCart();

// empties and resets cart upon completion of purchase 

function completePurchase() {
    console.log("Purchase complete&#33;");
    alert ("Thank you for your purchase!");

    document.querySelector("#counter").textContent = 0;
    localStorage.clear();

    var cartContainer = document.querySelector("#products");
    cartContainer.innerHTML = "";
    cartContainer.innerHTML = `
        <div class="cart-item-wrapper">
            <h2 class="empty-cart">Your cart is currently empty.</h2>
            <h6 class="back-to-shop-heading">
                <a href="shop.html" class="back-to-shop-link">Back to shop.</a>
            </h6>
        </div>
    `;
}