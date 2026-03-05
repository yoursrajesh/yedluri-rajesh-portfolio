
var swiper = new Swiper(".heroSwiper", {

loop:true,

speed:2000, // slide animation speed (2 seconds)

autoplay:{
delay:5000, // time before next slide
disableOnInteraction:false
},

pagination:{
el:".hero-pagination",
clickable:true
},

navigation:{
nextEl:".hero-next",
prevEl:".hero-prev"
}

});