// выпадающее меню
let header = document.querySelector('header');
let burgerMenu = document.querySelector('.mobileMenu');
let hideMenu = document.querySelector('#closeMenu');

burgerMenu.addEventListener('click', showMenu);
hideMenu.addEventListener('click', closeMenu);

function showMenu(){
    let blockMenu = document.querySelector('.hideMenu');
    blockMenu.classList.remove('hideMenu');
    blockMenu.classList.add('dropdwnMenu');
}

function closeMenu(){
    let blockMenu = document.querySelector('.dropdwnMenu');
    blockMenu.classList.remove('dropdwnMenu');
    blockMenu.classList.add('hideMenu');
}

// фильтр проектов

let filterItem = document.querySelector('.portfolio-list');

filterItem.addEventListener('click', filter);

    function filter (e) {
        let filterImg = e.target.getAttribute('data-filter');
        let img = document.getElementsByClassName('gray-layer');

        for(let i=0; i< img.length; i++){
            if(img[i].classList.contains(filterImg)){
                img[i].style.display='';
                // let gallery = document.querySelector('.portfolio-gallery');
                // gallery.classList.toggle('portfolio-filter');
            } else
                {img[i].style.display='none'}
        }
    }

// фильтр проектов

// слайд для секции What people say
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if(n >slides.length){
        slideIndex = 1;
    }    
    if(n <1){
        slideIndex = slides.length;
    }
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += "active";
}

// слайд для секции What people say

// валидация данных пользователя 
function validateEmail() {
    let name = document.getElementById('name').value;
    if(name.length <= 1){
        alert('Укажите имя более одного символа');
        return false;
    }
    
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
}
// валидация данных 