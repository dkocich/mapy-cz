var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");
var parseString = require('xml2js').parseString;

function Geocode(address) {

    EventEmitter.call(this);

    addressEmitter = this;

    /**
     * Geocode address string
     * "http://api4.mapy.cz/geocode?query=17.%20listopadu%20Ostrava"
     * @param  {String} address
     * @return {Object}
     */

    //Connect to the API URL (http://teamtreehouse.com/username.json)
    var request = http.get("http://api.mapy.cz/geocode?query=" + address, function(response) {
        var body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            addressEmitter.emit("error", new Error("There was an error getting the profile for " + address + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            addressEmitter.emit("data", chunk);
        });

        response.on('end', function () {

            if(response.statusCode === 200) {
                try {
                    // console.dir(response);
                    // console.dir(body);
                    var xml = body;
                    parseString(xml, function (err, result) {
                        // console.log(result);
                        addressEmitter.emit("end", result);
                    });

                    //Parse the data
                    // var parsed = JSON.parse(body);
                    // addressEmitter.emit("end", parsed);
                } catch (error) {
                    addressEmitter.emit("error", error);
                }
            }
        }).on("error", function(error){
            addressEmitter.emit("error", error);
        });
    });
}

util.inherits( Geocode, EventEmitter );

module.exports = Geocode;