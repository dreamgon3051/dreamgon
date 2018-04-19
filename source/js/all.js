$(window).scroll(function (evt) {
    if ($(window).scrollTop() > window.innerHeight) {
        $("#navBar").addClass("bg-background-opacity");
        // $(".navbar_top").css("padding","10px !important");
    }
    else {
        $("#navBar").removeClass("bg-background-opacity");
        // $(".navbar_top").css("padding", "30px !important");
    }
});
$(window).scroll(function (evt) {
    if ($(window).scrollTop() > 150) {
        // $(".bg_color").css("background","#FFFFFF");
        $(".bg_color").css("opacity","0");
    }
    else {
        // $(".bg_color").css("background", "#00CFC5");
        $(".bg_color").css("opacity","1");
    }
});

// Slide Show -----------------------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }
    console.log(slides);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot_active";
}
