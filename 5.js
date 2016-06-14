this.on('start', function() {
    this.thrusters.top(true);
});

this.on('sensor:bottom', function(contact) {
  if (contact) {
    this.thrusters.left(true);
    this.thrusters.top(false);
  } else {
  	this.thrusters.left(false);
  }
});

this.on('sensor:right', function(contact) {
  if (contact) {
    this.thrusters.bottom(true);
    this.thrusters.right(false);
  }
});

this.on('sensor:top', function(contact) {
  if (contact) {
    this.thrusters.bottom(false);
    this.thrusters.right(true);
  }
});

this.on('sensor:left', function(contact) {
  if (contact) {
    this.thrusters.bottom(false);
    this.thrusters.right(false);
    this.thrusters.top(true);
  }
});
