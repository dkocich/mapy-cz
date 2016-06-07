r = require('request');


module.exports = {

    /**
     * Geocode address string
     * "http://api4.mapy.cz/geocode?query=17.%20listopadu%20Ostrava"
     * @param  {String} address
     * @return {Object}
     */

    function(address) {

geocoder:  request(address, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Google homepage.
            } else {
                console.log(response);
            }

            return(body);
        })
    }
//
//     ,
//
// geocoderRev: request(address, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body); // Show the HTML for the Google homepage.
//     } else {
//         console.log(response);
//     }
// })
}
