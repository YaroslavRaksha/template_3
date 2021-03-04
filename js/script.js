let arrow1 = document.getElementById('firstArrow');
let quest1 = document.getElementById('firstQuestion');
let arrow2 = document.getElementById('secondArrow');
let quest2 = document.getElementById('secondQuestion');
let arrow3 = document.getElementById('thirdArrow');
let quest3 = document.getElementById('thirdQuestion');
let arrow4 = document.getElementById('fourthArrow');
let quest4 = document.getElementById('fourthQuestion');

quest1.onclick = function () {
    arrow1.classList.toggle('rotate');
}

quest2.onclick = function () {
    arrow2.classList.toggle('rotate');
}

quest3.onclick = function () {
    arrow3.classList.toggle('rotate');
}

quest4.onclick = function () {
    arrow4.classList.toggle('rotate');
}