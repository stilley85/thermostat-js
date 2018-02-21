Thermostat = function(){
  this.temperature = 20
};

Thermostat.prototype.up = function(){
  this.temperature += 1
};

Thermostat.prototype.down = function(){
  if (this.isMinimum(this.temperature)) {
    throw new Error("Currently at minimum temperate, cannot go lower.")
  } else {
    this.temperature -= 1
  }
};

Thermostat.prototype.isMinimum = function(temperature){
  if (temperature <= 10) {
    return true;
  } else {
    return false;
  }
};
