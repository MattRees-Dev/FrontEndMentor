'use strict';

const quoteOne = document.querySelector('.quote-one');
const quoteTwo = document.querySelector('.quote-two');
const portraitOne = document.querySelector('.portrait--one');
const portraitTwo = document.querySelector('.portrait--two');
const prevBtn = document.querySelector('.arrow--left');
const nextBtn = document.querySelector('.arrow--right');

// Media Query
const mediaQuery = window.matchMedia('(max-width: 375px)');
const user = document.querySelector('.user');
if (mediaQuery.matches) {
    console.log('This Works!!!');
    user.classList.toggle('column');
    user.classList.toggle('row');
}

prevBtn.addEventListener('click', function () {
    console.log('Prev');
    quoteOne.classList.toggle('hidden');
    quoteTwo.classList.toggle('hidden');
    portraitOne.classList.toggle('hidden');
    portraitTwo.classList.toggle('hidden');
});

nextBtn.addEventListener('click', function () {
    console.log('Next');
    quoteOne.classList.toggle('hidden');
    quoteTwo.classList.toggle('hidden');
    portraitOne.classList.toggle('hidden');
    portraitTwo.classList.toggle('hidden');
});

