
// Initialize slideIndex variable with value 1
let slideIndex = 1;

// Function to display the lightbox modal
function openLightbox() {
    // Set the display property of the lightbox modal to 'block' to make it visible
    document.getElementById('Lightbox').style.display = 'block';
}

// Function to hide the lightbox modal
function closeLightbox() {
    // Set the display property of the lightbox modal to 'none' to hide it
    document.getElementById('Lightbox').style.display = 'none';
}

// Function to change slide based on arrow clicks
function changeSlide(n) {
    // Increment or decrement the slide index by n
    showSlide(slideIndex += n);
}

// Function to navigate to a specific slide
function toSlide(n) {
    // Set the slide index to n
    showSlide(slideIndex = n);
}

// Function to display the specified slide
function showSlide(n) {
    // Get all slide elements and modal preview elements
    const slides = document.getElementsByClassName('slide');
    const modalPreviews = document.getElementsByClassName('modal-preview');

    // Reset slide index if it exceeds the total number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Reset slide index if it is less than 1
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove 'active' class from all modal preview elements
    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].classList.remove('active');
    }

    // Show the active slide and designate the associated modal preview as active.
    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].classList.add('active');
}
