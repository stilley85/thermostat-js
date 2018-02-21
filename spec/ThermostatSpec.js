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

});
