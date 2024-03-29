"use strict";
let slideIndex = 1;
function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
}
function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
}
function changeSlide(n) {
    showSlide(slideIndex += n);
}
function toSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const modalPreviews = document.getElementsByClassName('modal-preview');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].classList.add('active');
}
//# sourceMappingURL=lightbox.js.map