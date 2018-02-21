Thermostat = function(){
  this.temperature = 20
  this.powerSaving = true
};

Thermostat.prototype.up = function(){
  if (this.powerSaving === true) {
    if (this.temperature >= 25) {
      throw new Error("At maximum temperature, turn off power saving to go higher.")
    } else {
      this.temperature += 1
    }
  } else {
    if (this.temperature >= 32) {
      throw new Error("At maximum temperature.")
    } else {
      this.temperature += 1
    }
  }
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

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSaving = true
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSaving = false
};
