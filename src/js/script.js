import moment from "moment";

const button = document.querySelector('.button--js');

button.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--on');
})

var tenmoment = moment().format("HH:mm:ss");

console.log(moment().startOf('day').fromNow());

var time = document.querySelector(".header__time--js");
time.innerHTML = `${tenmoment}`;