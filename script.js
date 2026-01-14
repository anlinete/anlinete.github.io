const clickt = document.querySelector('.click');
const reset = document.querySelector('.reset');
const number = document.querySelector('.number');
const x2btn = document.querySelector('.x2');
const nm = document.querySelector('.nm');
const x3btn = document.querySelector('.x3');
const x5btn = document.querySelector('.x5');
const x10btn = document.querySelector('.x10')
const red = document.querySelector('.red');
const body = document.querySelector('body');
const end = document.querySelector('.end');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const secret = document.querySelector('.secret');

let chet = 0;
let cont = 1;
let ending = 0;


clickt.addEventListener('click', () => {
    chet = chet + cont
    number.textContent = chet;
    ending = ending + cont;
    end.textContent = ending
});

reset.addEventListener('click', () => {
    chet = 0;
    number.textContent = chet;
    cont = 1;
    body.classList.add('resetbgc')
})

x2btn.addEventListener('click', () => {
    if (chet >= 100 ) {
        cont = 2;
        chet = chet - 100;
        number.textContent = chet
    }
    else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000); 
})

//


x3btn.addEventListener('click', () => {
    if (chet >= 500) {
        cont = 3;
        chet = chet - 500;
        number.textContent = chet;
    } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);

})


x5btn.addEventListener('click', () => {
    if (chet >= 1000) {
        cont = 5;
        chet = chet - 1000;
        number.textContent = chet;
    } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);

})

x10btn.addEventListener('click', () => {
    if (chet >= 2500) {
        cont = 10;
        chet = chet - 2500;
        number.textContent = chet;
    } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);

})

red.addEventListener('click', () => {
 if (chet >= 6000) {
chet = chet - 6000;
number.textContent = chet
body.classList.add('level1')
cont = 20;
 } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);
   
})

blue.addEventListener('click', () => {
 if (chet >= 10000) {
chet = chet - 10000;
number.textContent = chet
body.classList.add('level2')
cont = 50;
 } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);
   
})

green.addEventListener('click', () => {
 if (chet >= 15000) {
chet = chet - 15000;
number.textContent = chet
body.classList.add('level3')
cont = 80;
 } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);
   
})

secret.addEventListener('click', () => {
 if (chet >= 10) {
chet = chet - 100000;
number.textContent = chet
body.classList.add('level4')
cont = 1000;
 } else nm.style.display = 'block';  setTimeout(() => {
        nm.style.display = 'none';
        }, 3000);
   
})





//x2btn.addEventListener('click',() => { --- тест работы проверки имеется ли уже или нет
//if (cont >= 2) {
//nm.textContent = 'У вас уже имеется '
//}})






