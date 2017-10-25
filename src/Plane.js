function Plane() {};

Plane.prototype.land = function(airport) {
  airport.land(this);
};
Plane.prototype.takeOff = function() {};
