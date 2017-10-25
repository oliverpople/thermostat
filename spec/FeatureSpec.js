'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("planes can be instructed to land at an airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
    expect(plane.isInAirport()).toEqual(true);
  });

  it('prevents plane landing with planes is full', function() {
    for (var i = 0; i < airport.maxCapacity(); i++) {
      plane.land(airport);
    };
    expect(function() {
      plane.land(airport);
    }).toThrowError('Airport full!');
  });

});
