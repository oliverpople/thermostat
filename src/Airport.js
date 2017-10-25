function Airport() {
  var planes = []

  Airport.prototype.planes = function() {
    return planes;
  };

  Airport.prototype.takeOff = function() {};

  Airport.prototype.land = function(plane) {
    planes.push(plane);
  };

};
