"use strict";
const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
fetch(apiUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
})
    .then(data => {
    const populationData = data.data[0].Population;
    console.log('Population of the United States:', populationData);
})
    .catch(error => {
    console.error('Error fetching data:', error);
});
//# sourceMappingURL=statistics.js.map