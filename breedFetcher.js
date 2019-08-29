const request = require("request");
const arg = process.argv.slice(2);
const searchArgQuery = arg[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${searchArgQuery}`,
  (err, res) => {
    try {
      const data = JSON.parse(res.body);

      if (data.length === 0) {
        throw new Error("Your data returns Empty Array");
      }
      console.log("description", data[0].description);
    } catch (err) {
      console.log(err);
    }
  }
);
/* 
const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  // console.log(body);
  // console.log(typeof body);

  if (error) {
    return console.log('Failed to request details: ', error);
  }

  const data = JSON.parse(body);
  // console.log(data);

  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
});
*/