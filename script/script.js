$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('header ul').toggleClass('showing');
        $('header ul li ul').toggleClass('showing');
    });
})



