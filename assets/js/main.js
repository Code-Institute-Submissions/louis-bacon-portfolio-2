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

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}