document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display gallery images using AJAX
    fetchGalleryImages();
});

function fetchGalleryImages() {
    // To retrieve gallery images from your server or an external API, use AJAX.
    //'your_api_endpoint' should be replaced with the real endpoint.
    const galleryApiUrl = 'your_api_endpoint';

    $.ajax({
        url: galleryApiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Call a function to display images in the gallery
            displayGalleryImages(data);
        },
        error: function (error) {
            console.error('Error fetching gallery images:', error);
        }
    });
}

function displayGalleryImages(images) {
    const galleryContainer = $('#gallery');

    // Create HTML components by iterating through the photos.
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
