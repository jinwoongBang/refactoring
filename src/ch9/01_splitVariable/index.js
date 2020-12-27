function distanceTravelled(scenario, time) {
  const calculator = new DistanceCalculator(scenario, time);
  return calculator.distance;
}

class DistanceCalculator {
  constructor(scenario, time) {
    this.primary = new PrimaryCalculator(scenario, time);
    this.secondary = new SecondaryCalculator(scenario, this.primary.time);
  }

  get primaryAcceleration() {
    return this.primary.acceleration;
  }

  get primaryTime() {
    return this.primary.time;
  }

  get primaryVelocity() {
    return this.primary.velocity;
  }

  get primaryDistance() {
    return this.primary.distance;
  }

  get secondaryTime() {
    return this.secondary.time;
  }

  get secondaryAcceleration() {
    return this.secondary.acceleration;
  }

  get secondaryDistance() {
    return this.secondary.distance(this.primaryVelocity);
  }

  get distance() {
    if (this.secondaryTime > 0) {
      return this.primaryDistance + this.secondaryDistance;
    }
    return this.primaryDistance;
  }
}

class PrimaryCalculator {
  constructor(scenario, time) {
    this._scenario = scenario;
    this._time = time;
  }

  get acceleration() {
    return this.scenario.primaryForce / this.scenario.mass;
  }

  get time() {
    return Math.min(time, this.senario.delay);
  }

  get velocity() {
    return this.acceleration * this.senario.delay;
  }

  get distance() {
    return this.acceleration * this.time * this.time;
  }
}

class SecondaryCalculator {
  constructor(scenario, time) {
    this._scenario = scenario;
    this._time = time;
  }

  get time() {
    return this._time - this.scenario.delay;
  }

  get acceleration() {
    return (
      (this.scenario.primaryForce + this.scenario.secondaryForce) /
      scenario.mass
    );
  }

  distance(primaryVelocity) {
    return this.time * (primaryVelocity + 0.5 * this.acceleration * this.time);
  }
}
