'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temp = this.DEFAULT_TEMP;
  this._powerSave = true;
  this._minimumTemp = 10;
  this._maximumTemp = 32;
  this._powerSaveMaximumTemp = 25;
};

Thermostat.prototype.getTemp = function() {
  return this._temp;
};

Thermostat.prototype.upTemp = function() {
  if (this._powerSave === true && this._temp >= this._powerSaveMaximumTemp) {
    return
  } else if (this._powerSave === false && this._temp >= this._maximumTemp) {
    return
  } else {
    this._temp += 1;
  }
};

Thermostat.prototype.downTemp = function() {
  if (this._temp <= this._minimumTemp) {
    return
  } else {
    this._temp -= 1;
  }
};

Thermostat.prototype.isPowerSaveModeOn = function() {
  return this._powerSave;
};

Thermostat.prototype.switchPowerMode = function() {
  if (this._powerSave = true) {
    return this._powerSave = false;
  } else if (this._powerSave = true) {
    return this._powerSave = false;
  }
};

Thermostat.prototype.resetTemp = function() {
  return this._temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temp <= 18) {
    return 'low-usage'
  } else if (this._temp > 18 && this._temp <= 25) {
    return 'medium-usage'
  } else if (this._temp > 25) {
    return 'high-usage'
  }
};
