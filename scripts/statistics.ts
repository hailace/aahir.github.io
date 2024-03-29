// Example API endpoint to retrieve population data for the United States
const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

// Make a GET request to the API endpoint
fetch(apiUrl)
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Extract the population data from the response
        const populationData = data.data[0].Population;
        // Process the data as needed
        console.log('Population of the United States:', populationData);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
    });
