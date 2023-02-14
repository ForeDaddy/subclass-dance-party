var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //old - var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //call the parent class and pass args
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.timeBetweenSteps = timeBetweenSteps;





};
//set prototype
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//reset constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeBlinkyDancer.prototype.oldStep = function () {
  //copy of function from parent
  makeDancer.prototype.step.call(this);
};

//new step function needs to call old step first
makeBlinkyDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();


};


  //var oldStep = blinkyDancer.step;

  //OLD VERSION (PROVIDED VERSION) of
  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

//   return blinkyDancer;
// };
