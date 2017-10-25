function Plane() {

  var isInAirport = false

  Plane.prototype.land = function(airport) {
    airport.land(this);
    this.isInAirport = true;
    };

  Plane.prototype.takeOff = function() {};

};
