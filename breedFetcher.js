const request = require('request');
 const  fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, resp, body) => {
    // console.log(body);
    // console.log(typeof body);

    if (error) {
      callback(error, null);
      // return console.log('Failed to request details: ', error);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0]
    if (breed) {
      callback(null, breed.description.trim());
      //console.log(breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
      //console.log(`Failed to find breed ${breedName}`);
    }
  });
};

module.exports = { fetchBreedDescription }