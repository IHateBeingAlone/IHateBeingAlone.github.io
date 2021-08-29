;

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

const burgerButton = document.getElementById("burger");
const burgerButtonPhone = document.getElementById("burger_phone");
const closeButton = document.getElementById("close");
const menu = document.getElementById("menu");

burgerButton.addEventListener('click', function() {
    menu.style.display = 'flex';
})

burgerButtonPhone.addEventListener('click', function() {
    burgerButtonPhone.classList.toggle('header-bot-menu-phone-change_bg');
    menu.classList.toggle('header-phone_menu');
})

closeButton.addEventListener('click', function() {
    menu.style.display = 'none';
})