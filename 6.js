this.on('start', function() {
    this.thrusters.top(true);
});

this.on('sensor:bottom', function(contact) {
  if (contact) {
  	this.thrusters.left(true);
    this.thrusters.top(false);
  }
});

this.on('sensor:right', function(contact) {
  this.thrusters.bottom(true);
  this.thrusters.left(false);
});

var countTop = 0;

this.on('sensor:top', function(contact) {
  if (contact) {
    if (countTop > 0) {
  	  this.thrusters.bottom(false);
      this.thrusters.right(true);
    }
    countTop++
  }
});

this.on('sensor:left', function(contact) {
  if (contact) {
  	this.thrusters.bottom(false);
    this.thrusters.left(true);
  }
});
