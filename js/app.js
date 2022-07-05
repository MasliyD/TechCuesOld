$(function() {

    /* Menu nav toggle */
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav__box").toggleClass("active")
        $("#nav").toggleClass("active")
        $("#nav__list").toggleClass("active")
        $("#nav__link").toggleClass("active")
        $("#nav__search").toggleClass("active")
        
    });

})