// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport

describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("can store planes", function() {
    expect(airport.planes()).toEqual([])
  });

  it("can land a plane", function() {
    expect(airport.land).not.toBeUndefined()

  });

  it("can tell plane to take off", function() {
    expect(airport.takeOff).not.toBeUndefined()
  });

  it("should have a maximum capacity of 10", function() {
    expect(airport.maxCapacity()).toEqual(10);
  });

});
