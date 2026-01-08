let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function() {
    offset = offset + 544;
    if (offset > 1088) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


document.querySelector('.prev').addEventListener('click', function() {
    offset = offset - 544;
    if (offset < 0) {
        offset = 1088;
    }
    sliderLine.style.left = -offset + 'px';
});