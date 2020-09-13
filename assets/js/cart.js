var carts = document.querySelectorAll(".add-item");

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
];

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
                    <a href="#" onclick="removeItem()">
                        <i class="fas fa-times-circle"></i>
                    </a>
                    <img src="./assets/images/${item.tag}.png" alt="${item.name}" class="cart-item-thumbnail" />
                    <span>${item.name}</span>
                </div>
                <div class="price">
                    £${item.price}.00
                </div>
                <div class="quantity">
                    <a href="#">
                        <i class="fas fa-minus-square"></i>
                    </a>
                    <span>${item.inCart}</span>
                    <a href="#">
                        <i class="fas fa-plus-square"></i>
                    </a>
                </div>
                <div class="total">
                    ${item.inCart} * £${item.price}.00
                </div>
            </div>`;
        });

        productContainer.innerHTML += `
        <div class="basket-total-container">
            <h4 class="basket-total-title">
                Cart Total: 
            </h4>
            <h4 class="basket-total">
                £${cartCost}.00
            </h4>
        </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();