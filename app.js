var mapycz = require("./index.js");

var mapyczCoordinates = new mapycz("Ostrava 17. listopadu 15");

/**
 * When the JSON body is fully received the
 * the "end" event is triggered and the full body
 * is given to the handler or callback
 **/
mapyczCoordinates.on("end", console.dir);

/**
 * If a parsing, network or HTTP error occurs an
 * error object is passed in to the handler or callback
 **/
mapyczCoordinates.on("error", console.error);