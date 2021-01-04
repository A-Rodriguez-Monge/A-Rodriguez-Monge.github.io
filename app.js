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

var card = document.querySelector('.card');

card.addEventListener('click', function (){
    card.classList.toggle('flip');
});

/*
document.querySelectorAll('.card').forEach(item => {
   item.addEventListener('click', event => {
       item.classList.toggle('flip');
   });
});
 */

navSlide();
