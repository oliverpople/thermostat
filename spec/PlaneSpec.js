describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("can land at the airport", function() {
    expect(plane.land).not.toBeUndefined()
  });

  it("can take off from the airport", function() {
    expect(plane.takeOff).not.toBeUndefined()
  });

});
