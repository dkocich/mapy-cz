var should = require('chai').should(),
    mcz = require('../index'),
    geocoder = mcz.geocoder,
    geocoderRev = mcz.geocoderRev;

    describe('#geocoder', function() {
      it('accepts string', function() {
        geocoder('17. listopadu Ostrava').to.be.a('string');
      });
    });

    // describe('#geocoderRev', function() {
    //   it('accept string', function() {
    //     geocoderRev('19.0 49.0').should.equal('&');
    //   });

    });
