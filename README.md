# mapy-cz

Mapy.cz API Client for Node JS (http://api.mapy.cz/). It supports geocode function of the **REST API version 4.11** described here http://api.mapy.cz/view?page=geocoding .

## Installation

```
npm install mapy-cz
```

## Usage:

```
var mapycz = require('mapy-cz');
```

Create a `mapycz` instance that can be used to make requests to Mapy.cz's geocoding APIs.

```javascript

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
```

## License

The MIT License

Copyright (c) 2016 by David Kocich <dkocich@gmail.com>. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Changelog

### 0.0.1

  * first commit and testing version release
