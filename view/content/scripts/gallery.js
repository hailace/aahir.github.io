"use strict";
document.addEventListener('DOMContentLoaded', function () {
    fetchGalleryImages();
});
function fetchGalleryImages() {
    const galleryApiUrl = 'your_api_endpoint';
    $.ajax({
        url: galleryApiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            displayGalleryImages(data);
        },
        error: function (error) {
            console.error('Error fetching gallery images:', error);
        }
    });
}
function displayGalleryImages(images) {
    const galleryContainer = $('#gallery');
    images.forEach(image => {
        const imageElement = `
            <div class="col-md-4 mb-4">
                <a href="${image.fullSizeUrl}" data-lightbox="gallery" data-title="${image.caption}">
                    <img src="${image.thumbnailUrl}" alt="${image.caption}" class="img-fluid">
                </a>
            </div>`;
        galleryContainer.append(imageElement);
    });
}
//# sourceMappingURL=gallery.js.map