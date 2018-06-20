$(document).ready(function(){
    $(document).scroll(function (e) {
        if ($(document).scrollTop() > (window.innerHeight - 50)) {
            // $(".navbar_top").css("background", "rgba(255,255,255,0.85)");
            // $(".navbar_top").css("padding", "10px");
            $(".navbar_top").addClass("navbar_scroll");
            $("#navBar .navBrand_logo").css("display","block");
            $("#navBar .navBrand_logoType").css("display", "none");
        }
        else {
            // $(".navbar_top").css("background", "rgba(255,255,255,0)");
            // $(".navbar_top").css("padding", "30px 20px 30px 30px");
            $(".navbar_top").removeClass("navbar_scroll");
            $("#navBar .navBrand_logo").css("display", "none");
            $("#navBar .navBrand_logoType").css("display", "block");
        }
    });
    $(document).scroll(function (e) {
        if ($(document).scrollTop() > 150) {
            $(".bg_color").css("opacity", "0");
        }
        else {
            $(".bg_color").css("opacity", "1");
        }
    });
    // $("#svgNavButton").hover(function () {
    //     $(".svgNavButton_bar_1").attr({width: "650",x:"250"});
    //     $(".svgNavButton_bar_2").attr({width: "650",x:"250"});
    //     $(".svgNavButton_bar_3").attr({width: "650",x:"250"});

    // },function () {
    //     $(".svgNavButton_bar_1").attr({width: "550",x:"350"});
    //     $(".svgNavButton_bar_2").attr({width: "350",x:"550"});
    //     $(".svgNavButton_bar_3").attr({width: "150",x:"750"});
    // });
    var navButtonCount = false ;
    $("#svgNavButton").on("click",function () {
        if (!navButtonCount){
            $(".svgNavButton_bar_1").attr({width: "650",x:"250"});
            $(".svgNavButton_bar_2").attr({width: "650",x:"250"});
            $(".svgNavButton_bar_3").attr({width: "650",x:"250"});
            navButtonCount = true;
        }
        else{
            $(".svgNavButton_bar_1").attr({width: "550",x:"350"});
            $(".svgNavButton_bar_2").attr({width: "350",x:"550"});
            $(".svgNavButton_bar_3").attr({width: "150",x:"750"});
            navButtonCount = false;
        }
    });
    setTimeout(function () {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var heroLogoCount = false;
        if (!isMobile) {
            $("#svgHeroLogo").hover(function () {
                $(".svgHeroLogo_path").css("transform", "scale(1.2)");
                $(".svgHeroLogo_path_L").css("transform", "scale(1.2)");
                $(".svgHeroLogo_outline").css("transform", "scale(1.1)");
                $(".svgHeroLogo_outline_2").css("transform", "scale(0.95)");
            }, function () {
                $(".svgHeroLogo_path").css("transform", "scale(1)");
                $(".svgHeroLogo_path_L").css("transform", "scale(1)");
                $(".svgHeroLogo_outline").css("transform", "scale(1)");
                $(".svgHeroLogo_outline_2").css("transform", "scale(1)");
            });
        }
        else{
            $("#svgHeroLogo").on("click", function () {
                if (!heroLogoCount) {
                    $(".svgHeroLogo_path").css("transform", "scale(1.2)");
                    $(".svgHeroLogo_path_L").css("transform", "scale(1.2)");
                    $(".svgHeroLogo_outline").css("transform", "scale(1.1)");
                    $(".svgHeroLogo_outline_2").css("transform", "scale(0.95)");
                    heroLogoCount = true;
                }
                else{
                    $(".svgHeroLogo_path").css("transform", "scale(1)");
                    $(".svgHeroLogo_path_L").css("transform", "scale(1)");
                    $(".svgHeroLogo_outline").css("transform", "scale(1)");
                    $(".svgHeroLogo_outline_2").css("transform", "scale(1)");
                    heroLogoCount = false;
                }
            });
        }
    }, 4000);
});


// var myPath = document.getElementById("svgHeroLogo_p1");
// var length = myPath.getTotalLength();
// console.log(length);


// // Slide Show -----------------------------
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function moveSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var q = slideIndex - 1;
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" dot_active", "");
//     }
//     // console.log(slides);
//     // console.log(slideIndex);
//     // console.log(slideIndex - 1);
//     // console.log(slides[slideIndex - 1]);
//     // console.log(slides.constructor.name, slides);    
//     slides[slideIndex - 1].style.display = "block";
//     // console.log(slides.constructor.name, slides);
//     dots[slideIndex - 1].className += " dot_active";
// }



// Multiple Slide Show -----------------------------
var slideNumbers = 2;
// the amount of slides
var slideStartIndex = 1;
// start iw slides
var slideArray = [1, 1];
// var k;
// for (let k = 0 ; k < slideNumbers ; k++){
//     console.log(k)
//     slideArray[k] = slideStartIndex;
//     showSlides(slideStartIndex, k);
//     console.log(k, slideNumbers)
// }
// **** 2018/05/29 for csi.js inject html issue, will cause the slideArray[] loading incorrectly,
// workaround with set slideArray directly to [1,1] ****

function moveSlides(n, slideId) {
    slideArray[slideId] = slideArray[slideId] + n;
    showSlides(slideArray[slideId], slideId);
}

function currentSlide(n, slideId) {
    slideArray[slideId] = n;
    showSlides(slideArray[slideId], slideId);
}

function showSlides(n, slideId) {
    var i;
    var j;
    var slideName = "slide" + slideId;
    var slides = document.getElementsByName(slideName);
    var dotName = "dot" + slideId;
    var dots = document.getElementsByName(dotName);

    if (n > slides.length) {
        slideArray[slideId] = 1;
    }

    if (n < 1) {
        slideArray[slideId] = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // slides[i].className = slides[i].className.replace(" active", "");
    }

    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" dot_active", "");
    }

    console.log("slideName = "+slideName);
    console.log("slides = " +slides);
    console.log("slides.length = " +slides.length);
    let slide = slides.item(slideArray[slideId] - 1)
    console.log("slide:", slide);  
    slides[slideArray[slideId] - 1].style.display = "block";
    // slides[slideArray[slideId] - 1].className += " active";
    dots[slideArray[slideId] - 1].className += " dot_active";
} 
