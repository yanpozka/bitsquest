this.on('start', function() {
    this.thrusters.top(true);
    this.thrusters.left(true);
});

this.on('sensor:bottom', function(contact) {
  if (contact) {
    this.thrusters.left(true);
  } else {
    this.thrusters.left(false);
  }
});

this.on('sensor:right', function(contact) {
  if (contact) {
    this.thrusters.bottom(true);
    this.thrusters.top(false);
  } else {
    this.thrusters.left(true);
  }
});
