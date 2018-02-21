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
    for (var i = 1; i <=10; i++){
      thermostat.down()
    }
    expect(function(){thermostat.down();}).toThrow(new Error("Currently at minimum temperate, cannot go lower."));
  });

});
