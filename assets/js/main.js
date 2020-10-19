// back to top button appears when scrolling from top of page

$(document).ready(function() {
    var bttt = document.getElementById("returnToTop");
            
    window.onscroll = function() {
        showButton();
    };

    function showButton() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            bttt.style.display = "block";
        } else {
            bttt.style.display = "none";
        }
    }
});

// takes user back to top of page when clicking on button

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// disables spaces in all input fields in forms

var inputField = document.querySelectorAll("input");

for (let i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener("keypress", function() {
        var key = event.keyCode;
        if (key === 32) {
            event.preventDefault();
        }
    });
}

// disables non-numeric characters in phone number input fields

var numbersOnly = document.querySelectorAll("#phone");

for (let i = 0; i < numbersOnly.length; i++) {
    numbersOnly[i].addEventListener("keypress", function() {
        var key = event.keyCode;
        if (key < 48 || key > 57) {
            event.preventDefault();
        }
    });
}

// disables invalid character input in DOB fields

var dateOfBirth = document.querySelectorAll("#dob");

for (let i = 0; i < dateOfBirth.length; i++) {
    dateOfBirth[i].addEventListener("keypress", function() {
        var key = event.keyCode;
        if (key < 47 || key > 57) {
            event.preventDefault();
        }
    });
}