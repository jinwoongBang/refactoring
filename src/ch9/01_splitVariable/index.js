function distanceTravelled(scenario, time) {
  const calculator = new DistanceCalculator(scenario, time);
  return calculator.distance;
}

class DistanceCalculator {
  constructor(scenario, time) {
    this._scenario = scenario;
    this._time = time;
  }

  get primaryAcceleration() {
    return this.scenario.primaryForce / this.scenario.mass;
  }

  get primaryTime() {
    return Math.min(time, this.senario.delay);
  }

  get primaryVelocity() {
    return this.acceleration * this.senario.delay;
  }

  get primaryDistance() {
    return this.acceleration * this.time * this.time;
  }

  get secondaryTime() {
    return this.primaryTime - this.scenario.delay;
  }

  get secondaryAcceleration() {
    return (
      (this.scenario.primaryForce + this.scenario.secondaryForce) /
      scenario.mass
    );
  }

  get secondaryDistance() {
    return (
      this.primaryVelocity * this.secondaryTime +
      0.5 * this.secondaryAcceleration * this.secondaryTime * this.secondaryTime
    );
  }

  get distance() {
    if (this.secondaryTime > 0) {
      return calculator.primaryDistance + calculator.secondaryDistance;
    }
    return calculator.primaryDistance;
  }
}
