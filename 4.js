this.on('start', function() {
    this.thrusters.top(true);
  	this.thrusters.left(true);
});

this.on('sensor:bottom', function(contact) {
  if (contact) {
    this.thrusters.bottom(true);
    this.thrusters.top(false);
  }
});

this.on('sensor:right', function(contact) {
  this.thrusters.left(true);
});
