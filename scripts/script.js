const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    watchOverflow: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});


//2nd swipper

const retirementSwiper = new Swiper(".retirementSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,


    navigation: {
        nextEl: ".retirement-next",
        prevEl: ".retirement-prev",
    },

    pagination: {
        el: ".retirement-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        }
    }
});


//review swipper
const reviewSwiper = new Swiper(".reviewSwiper", {

    slidesPerView:2,
    spaceBetween:40,
    loop:true,

    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },

    navigation:{
        nextEl:".review-next",
        prevEl:".review-prev",
    },

    pagination:{
        el:".review-pagination",
        clickable:true,
    },

    breakpoints:{
        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        992:{
            slidesPerView:2,
        }
    }

});