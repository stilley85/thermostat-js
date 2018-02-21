debugger;

describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("initializes with a temperature of 20", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("increase raises the temperature by 1", function(){
    thermostat.powerSavingModeOff();
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("increase decreases the temperature by 1", function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("isMinimum returns false if temperate is 10 or less", function(){
    expect(thermostat.isMinimum(10)).toEqual(true);
    expect(thermostat.isMinimum(6)).toEqual(true);
  });

  it("isMinimum returns true if temperate is above 10", function(){
    expect(thermostat.isMinimum(11)).toEqual(false);
  });

  it("10 is the minimum temperature", function(){
    for (var i = 1; i < 11; i++){
      thermostat.down()
    }
    expect(function(){thermostat.down();}).toThrow(new Error("Currently at minimum temperate, cannot go lower."));
  });

  it("The maximum temperature is 25 if power saving mode is on", function(){
    for (var i = 1; i < 6; i++){
      thermostat.up()
    }
    expect(function(){thermostat.up();}).toThrow(new Error("At maximum temperature, turn off power saving to go higher."));
  });

  it("The maximum temperature is 32 if power saving mode is off", function(){
    thermostat.powerSavingModeOff();
    for (var i = 1; i < 13; i++){
      thermostat.up()
    }
    expect(function(){thermostat.up();}).toThrow(new Error("At maximum temperature."));
  });

  it("powerSavingModeOn turns on power saving mode", function(){
    thermostat.powerSavingModeOff();
    thermostat.powerSavingModeOn();
    expect(thermostat.powerSaving).toEqual(true);
  });

  it("powerSavingModeOff turns off power saving mode", function(){
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSaving).toEqual(false);
  });

});
