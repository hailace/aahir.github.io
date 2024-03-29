"use strict";
document.addEventListener('DOMContentLoaded', function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWoxMjM0NTEiLCJhIjoiY2xzemdkeGMyMG80cTJpbzE5d3piZ2E2eSJ9.EdwCEhUhK3sZ7AJPacqjbQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 13
    });
    const addressInput = document.getElementById('addressInput');
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function () {
        const address = addressInput.value.trim();
        getCoordinatesFromAddress(address)
            .then(coordinates => {
            updateMap(coordinates);
        })
            .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch location data. Please try again later.');
        });
    });
    function getCoordinatesFromAddress(address) {
        const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`;
        return fetch(mapboxUrl)
            .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
            .then(data => {
            const coordinates = data.features[0].geometry.coordinates;
            return coordinates;
        });
    }
    function updateMap(coordinates) {
        map.flyTo({ center: coordinates, zoom: 13 });
        new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    }
});
//# sourceMappingURL=events.js.map