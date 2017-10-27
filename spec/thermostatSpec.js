'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    // spyOn(thermostat,'getTemp').and.returnValue(20);
  });

  it('Thermostat displays the default temperature of 20 degrees', function() {
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('Thermostat increases temp with an up function', function() {
    thermostat.upTemp();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('Thermostat increases temp with an up function', function() {
    thermostat.downTemp();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it('Thermostat sets mininum temp of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.downTemp();
    }
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('It starts with power saving mode on as default', function() {
    expect(thermostat.isPowerSaveModeOn()).toBe(true);
  });

  it('Switches power saving mode on and off', function() {
    thermostat.switchPowerMode();
    expect(thermostat.isPowerSaveModeOn()).toBe(false);
  });

  it('Sets max temp to 32 degrees without power save mode', function() {
    thermostat.switchPowerMode();
    for (var i = 0; i < 13; i++) {
      thermostat.upTemp();
    }
    expect(thermostat.getTemp()).toEqual(32);
  });

  it('Uses power saving mode to set max temp to 25 degrees', function() {
    thermostat.isPowerSaveModeOn(true);
    for (var i = 0; i < 6; i++) {
      thermostat.upTemp();
    }
    expect(thermostat.getTemp()).toEqual(25);
  });

  it('resets temp to 20 degrees', function() {
    thermostat.resetTemp();
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('reports low energy usage', function() {
    for (var i = 0; i < 3; i++) {
      thermostat.downTemp();
    }
    expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
  });

  it('reports medium energy usage', function() {
    expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
  });

  it('reports high energy usage', function() {
    thermostat.switchPowerMode();
    for (var i = 0; i < 6; i++) {
      thermostat.upTemp();
    }
    expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
  });

});
