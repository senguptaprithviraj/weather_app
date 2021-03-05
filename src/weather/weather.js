const request = require('postman-request');


const getWeather = function (location){
    const url = 'http://api.weatherstack.com/current?access_key=8e46c349f8ad8316c520b1502199bdfe&query='+location;
    return new Promise((resolve, reject) => {
        request({ url: url, json: true }, function (error, response, body) {
            //  const respJson = response.body;
            if (error) {
                reject(error)
            } else if (body.error) {
                reject(body.error.info)
            } else {
                resolve(body)
            }
        });
       
      });
    
    return "This is my notes ...";
}

module.exports = getWeather;