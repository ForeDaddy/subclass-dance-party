var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //old - var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this);
  this.setPosition(top, left);


};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

MakeBlinkyDancer.prototype.oldStep = function () {
  setTimeout(this.oldStep, this.timeBetweenSteps);;
};

MakeBlinkyDancer.prototype.step = function () {
  this.oldStep(this.$node.toggle());

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
