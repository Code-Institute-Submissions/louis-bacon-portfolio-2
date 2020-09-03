var carts = document.querySelectorAll(".add-item");

var products = [
    {
        name: "LB17 Black",
        tag: "lb17black",
        price: 25,
        inCart: 0
    },
    {
        name: "LB17 White",
        tag: "lb17white",
        price: 25,
        inCart: 0
    },
    {
        name: "Brick By Brick",
        tag: "brickbybrick",
        price: 30,
        inCart: 0
    },
    {
        name: "Bet On Yourself",
        tag: "betonyourself",
        price: 30,
        inCart: 0
    },
    {
        name: "Born2Excel Black",
        tag: "born2excelblack",
        price: 25,
        inCart: 0
    },
    {
        name: "Born2Excel White",
        tag: "born2excelwhite",
        price: 25,
        inCart: 0
    },
    {
        name: "noMediocre",
        tag: "nomediocre",
        price: 25,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function () {
        cartNumbers();
    });
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        document.querySelector("#counter").textContent = productNumbers;
    }
}

function cartNumbers() {
    var productNumbers = localStorage.getItem("cartNumbers");


    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("#counter").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("#counter").textContent = 1;
    }
}

onLoadCartNumbers();