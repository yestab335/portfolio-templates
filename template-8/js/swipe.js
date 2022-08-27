var swiper = new Swiper(".myswiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEL: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        840: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});