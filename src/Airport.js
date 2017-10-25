function Airport() {
  const maxCapacity = 10;
  var planes = []

  Airport.prototype.maxCapacity = function() {
    return maxCapacity;
  };

  Airport.prototype.planes = function() {
    return planes;
  };

  Airport.prototype.takeOff = function() {};

  Airport.prototype.land = function(plane) {
    if (planes.length < maxCapacity) {
      planes.push(plane);
    } else {
      throw new Error('Airport full!');
    };
  };

};
