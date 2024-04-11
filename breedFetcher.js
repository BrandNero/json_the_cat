const request = require('request');

const requestBreed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${requestBreed}`, (error, response, body) => {
  try {
    if (error) {
      console.log("Error occurred:", error);
    }
    if (response.statusCode !== 200) {
      console.log("Breed not found. Please try again.");
    }
    {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Breed not found. Please try again.");
      }
      console.log(data[0].description);
      console.log(typeof data);
    }
  } catch (error) {
    console.log("Error occurred while parsing JSON");
  }
});