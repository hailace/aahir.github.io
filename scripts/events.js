// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Mapbox map initialization
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWoxMjM0NTEiLCJhIjoiY2xzemdkeGMyMG80cTJpbzE5d3piZ2E2eSJ9.EdwCEhUhK3sZ7AJPacqjbQ';
    const map = new mapboxgl.Map({
        container: 'map', // ID of the HTML container element for the map
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [0, 0], // Default center coordinates
        zoom: 13 // Default zoom level
    });

    // Get references to HTML elements
    const addressInput = document.getElementById('addressInput');
    const searchButton = document.getElementById('searchButton');

    // Add click event listener to the search button
    searchButton.addEventListener('click', function () {
        // Get the address from the input field and trim whitespace
        const address = addressInput.value.trim();

        // Call the function to get coordinates from the address
        getCoordinatesFromAddress(address)
            .then(coordinates => {
                // Update the map with the new coordinates
                updateMap(coordinates);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                alert('Failed to fetch location data. Please try again later.');
            });
    });

    // Function to get coordinates from the address using Mapbox Geocoding API
    function getCoordinatesFromAddress(address) {
        // Use Mapbox Geocoding API directly
        const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox
        .places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`;

        // Fetch the coordinates from the API
        return fetch(mapboxUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Extract coordinates from API response
                const coordinates = data.features[0].geometry.coordinates;
                return coordinates;
            });
    }

    // Function to update the map with new coordinates
    function updateMap(coordinates) {
        // Fly to the new coordinates and set zoom level
        map.flyTo({ center: coordinates, zoom: 13 });
        // Add a marker at the new coordinates
        new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    }
});
