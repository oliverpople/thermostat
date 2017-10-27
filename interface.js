$(document).ready(function() {

  var thermostat = new Thermostat();
    updateTemperature();

  $('#temp-up').click(function() { // event listener
    thermostat.upTemp(); // update model
    updateTemperature(); // update view
  });

  $('#temp-down').click( function() {
    thermostat.downTemp();
    updateTemperature();
  });

  $('#temp-reset').click( function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click( function() {
    thermostat.isPowerSaveModeOn();
    $('#power-saving-status').text('On')
    updateTemperature();
  });

  $('#powersaving-off').click( function() {
    thermostat.switchPowerMode();
    $('#power-saving-status').text('Off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat._temp);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  };


});
