const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    // navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoHeight: true,
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        }
    },
    // autoHeight: true,
});