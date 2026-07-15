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

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
    new bootstrap.Popover(popoverTriggerEl)
);

const chatBtn = document.querySelector(".chat-btn");

const popover = new bootstrap.Popover(chatBtn, {
    trigger: "manual"
});

popover.show();



//validation
$(document).ready(function () {
 
    $("#submit-form").validate({
 
        errorClass:"error",

    errorPlacement:function(error,element){

        if(element.attr("type")=="checkbox"){
            error.insertAfter(element.parent());
        }
        else{
            error.insertAfter(element);
        }

    },
 
        rules: {
 
            name: {
                required: true,
            },
 
            phone: {
                required: true,
                maxlength: 15 , 
                minlength:5 ,
                pattern: /^\d+$/ 
            },
 
            email: {
                required: true,

                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
            },
            message: {
                maxlength: 300
            },
 
            terms: {
                required: true
            }
 
        },
 
        messages: {
 
            name: {
                required: "Enter a value for this field.", 
            },
 
            phone: {
                required: "Enter a value for this field.",
                pattern: "Enter only numbers" , 
                minlength:'You must enter at least 5 digits.' , 
                maxlength:'Maximum limit: 15 digits.'
            },
 
            email: {
                required: "Enter a value for this field.",
                pattern: "Enter a valid email address. (eg: yourname@domain.com)"
            },

            terms: {
                required: "Select this option."
            }
 
        }
 
    });
 
});
 