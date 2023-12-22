const request = require('request');

const fetchBreedDescription = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found');
    } else {
      console.log(data[0].description);
    }
  });
};

const breedName = process.argv[2];
fetchBreedDescription('Siberian', (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});