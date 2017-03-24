const video = document.querySelector('#video');
const pkPanel = document.getElementById('pkPanel');
const pkText = document.getElementById('pkText');
const expo = document.getElementById('expo');
const control = document.querySelectorAll('.panel');

pkPanel.addEventListener('click', function() {
    pkPanel.classList.toggle('change');
    video.classList.toggle('hide');
    expo.classList.toggle('hide');
    pkText.classList.toggle('hide');
});
//Parkour Panel^

const gamePanel = document.querySelector('#gamePanel');
const figs = document.querySelector('#gamebox');
const gameText = document.querySelector('#gameText')

gamePanel.addEventListener('click', function() {
    gameText.classList.toggle('hide');
    figs.classList.toggle('hide');
    figs.classList.toggle('proper');
    gamePanel.classList.toggle('change');
});

// game Panel^

const moviePanel = document.querySelector('#moviePanel');
const figs2 = document.querySelector('#moviebox');
const movieText = document.querySelector('#movieText')
const expo2 = document.getElementById('expo2');

moviePanel.addEventListener('click', function() {
    movieText.classList.toggle('hide');
    moviePanel.classList.toggle('change');
    figs2.classList.toggle('hide');
    figs2.classList.toggle('proper');

});
