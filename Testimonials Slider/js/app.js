'use strict';

const quoteOne = document.querySelector('.quote-one');
const quoteTwo = document.querySelector('.quote-two');
const portraitOne = document.querySelector('.portrait--one');
const portraitTwo = document.querySelector('.portrait--two');
const prevBtn = document.querySelector('.arrow--left');
const nextBtn = document.querySelector('.arrow--right');

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