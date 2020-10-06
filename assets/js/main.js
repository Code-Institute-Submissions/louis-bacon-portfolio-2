// back to top button appears when scrolling from top of page

$(document).ready(function() {
    bttt = document.getElementById("returnToTop");
            
    window.onscroll = function() {showButton()};

    function showButton() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            bttt.style.display = "block";
        } else {
            bttt.style.display = "none";
        }
    };
});

// takes user back to top of page when clicking on button

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var inputField = document.querySelectorAll("input");

// disables spaces in all input fields in forms
for (let i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener("keypress", function() {
        var key = event.keyCode;
        if (key === 32) {
            event.preventDefault();
        }
    });
}