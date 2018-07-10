$(document).ready(function () {
    $("#start").click(function() {
         $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 2000);
    });
    
});