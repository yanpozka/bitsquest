this.on('start', function() {
    this.thrusters.left(true);
});

this.on('sensor:right', function(contact) {
  if (contact) {
  	this.thrusters.bottom(true);
  } else {
  	this.thrusters.bottom(false);
  }
});
