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
const courses = document.getElementById("courses");
const coursesButton = document.getElementById("coursesButton");
const coursesButtonBack = document.getElementById("coursesButtonBack");
const building = document.getElementById("building");
const buildingButton = document.getElementById("buildingButton");
const buildingButtonBack = document.getElementById("buildingButtonBack");
const geo = document.getElementById("geo");
const geoButton = document.getElementById("geoButton");
const geoButtonBack = document.getElementById("geoButtonBack");

burgerButton.addEventListener('click', function() {
    menu.style.display = 'flex';
})

coursesButton.addEventListener('click', function() {
    courses.style.display = 'flex';
    menu.style.display = 'none';
})

coursesButtonBack.addEventListener('click', function() {
    courses.style.display = 'none';
    menu.style.display = 'flex';
})

buildingButton.addEventListener('click', function() {
    courses.style.display = 'none';
    building.style.display = 'flex';
})

buildingButtonBack.addEventListener('click', function() {
    courses.style.display = 'flex';
    building.style.display = 'none';
})

geoButton.addEventListener('click', function() {
    geo.style.display = 'flex';
    building.style.display = 'none';
})

geoButtonBack.addEventListener('click', function() {
    building.style.display = 'flex';
    geo.style.display = 'none';
})

burgerButtonPhone.addEventListener('click', function() {
    if (menu.style.display == 'none' && courses.style.display == 'none' && building.style.display == 'none' && geo.style.display == 'none') {
        menu.style.display = 'flex';
        burgerButtonPhone.classList.add('header-bot-menu-phone-change_bg');
    } else if (menu.style.display == 'flex' && courses.style.display == 'none' && building.style.display == 'none' && geo.style.display == 'none') {
        menu.style.display = 'none';
        burgerButtonPhone.classList.remove('header-bot-menu-phone-change_bg');
    } else if (menu.style.display == 'none' && courses.style.display == 'flex') {
        courses.style.display = 'none';
    } else if (menu.style.display == 'none' && building.style.display == 'flex') {
        building.style.display = 'none';
    } else if (menu.style.display == 'none' && geo.style.display == 'flex') {
        geo.style.display = 'none';
    }
})

closeButton.addEventListener('click', function() {
    menu.style.display = 'none';
})