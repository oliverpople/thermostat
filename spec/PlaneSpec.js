describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("can land at the airport", function() {
    expect(plane.land).not.toBeUndefined()
  });

  it("can take off from the airport", function() {
    expect(plane.takeOff).not.toBeUndefined()
  });

  it("should report that it is longer in the airport after taking off", function() {
    plane.land(airport);
    console.log('Hi Ollie!');
    plane.takeOff();
    console.log(plane.isInAirport());
    expect(plane.isInAirport()).toEqual(false);
  });

});
