const request = require('request');
const commandLineArg = function() {
  const args = process.argv[2];
  return args;
}
const breedFetcher = function(args) {
  if(typeof args === 'undefined') {
    console.log("Provide name of breed");
    return;
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No breed found");
      return;
    }
    console.log(data[0].description);
  })
}
const args = commandLineArg();
breedFetcher(args);