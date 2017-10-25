function Plane() {

  var isInAirport = false;

  Plane.prototype.isInAirport = function() {
    return isInAirport;
  };

  Plane.prototype.land = function(airport) {
    airport.land(this);
    isInAirport = true;
  };

  Plane.prototype.takeOff = function() {
    isInAirport = false;
  };

};
