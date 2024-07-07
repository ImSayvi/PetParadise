

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});

const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnMoreBtns, i)=> {
    learnMoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) =>{
            modalView.classList.remove("active");
        });
    });
});


const swiper = new Swiper('.js-testimonial-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true
      },
      breakpoints:{
        767:{
            slidesPerView: 2
        }
      }
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll("section");
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         let sectionHeight = current.offsetHeight;
//         let sectionTop = current.offsetTop - 50;
//         let id = current.getAttribute("id");

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
//         }
//         else{
//             document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const id = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav-items a[href*='" + id + "']").classList.add("active");
            } else {
                document.querySelector(".nav-items a[href*='" + id + "']").classList.remove("active");
            }
        });
    });
});


ScrollReveal({
    // reset: true, 
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal(".home .home-content .text-2, .section-tittle-01, .section-tittle-02 ", {delay: 500, origin: 'left'});
ScrollReveal().reveal(".home .home-content .text-3, .about-info .btn, .description,  .terms-description", {delay: 600, origin: 'right'});
ScrollReveal().reveal(".contact-left li", {delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal(".home .home-content .btn, .terms-info", {delay: 700, origin: 'bottom'});
ScrollReveal().reveal(".about-img", {delay: 500, origin: 'bottom'});
ScrollReveal().reveal(".about .description .copy-right", {delay: 600, origin: 'right'});
ScrollReveal().reveal(".about .professional-list li, .box .contact", {delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal(".skills-description, .services-description, .contact-card, .swiper-wrapper", {delay: 700, origin: 'left'});
ScrollReveal().reveal(".experience-card, .service-card", {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal("footer .group", {delay: 600, origin: 'top', interval: 200});
