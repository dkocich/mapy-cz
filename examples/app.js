var mapycz = require("../index.js");

var mapyczCoordinates = new mapycz("Ostrava 17. listopadu 15");

/**
 * If a parsing, network or HTTP error occurs an
 * error object is passed in to the handler or callback
 **/
mapyczCoordinates.on("error", console.error);

/**
 * When the JSON body is fully received the
 * the "end" event is triggered and the full body
 * is given to the handler or callback
 **/
mapyczCoordinates.on("end", function (response) {
    var resp = console.log(response.result.point["0"].item["0"].$);

    // {
    //     "result": {
    //     "point": [
    //         {
    //             "$": {
    //                 "query": "Ostrava 17. listopadu 15",
    //                 "status": "200",
    //                 "message": "OK"
    //             },
    //             "item": [
    //                 {
    //                     "$": {
    //                         "x": "18.1636009216",
    //                         "y": "49.8336868286",
    //                         "id": "9112126",
    //                         "source": "addr",
    //                         "title": "17. listopadu 2172/15, Ostrava, okres Ostrava-město, kraj Moravskoslezský"
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // }
    // }

    console.log(resp);

    // {
    //     x: '18.1638221741',
    //         y: '49.8303413391',
    //         id: '112157',
    //         source: 'stre',
    //         title: '17. listopadu, Ostrava, okres Ostrava-město, kraj Moravskoslezský'
    // }

});