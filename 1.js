this.on('start', function() {
  this.thrusters.left(true);
  console.log("I'm here " + this.thrusters.left())
  this.thrusters.top(true);
});
