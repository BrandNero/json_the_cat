const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    try {
      if (error) {
        callback("Error occurred:", error);
        return;
      }
      if (response.statusCode !== 200) {
        callback("Breed not found. Please try again.");
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("Breed not found. Please try again.");
        return;
      }
      callback(null, data[0].description.trim());
    } catch (error) {
      callback("Error occurred while parsing JSON");
    }
  });
};

module.exports = fetchBreedDescription;