const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle burger nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //burger animation
        burger.classList.toggle('toggle')
    });
}

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-6vh";
    }
}

document.querySelectorAll('.card').forEach(item => {
   item.addEventListener('click', event => {
       item.classList.toggle('flip');
   });
});

navSlide();
