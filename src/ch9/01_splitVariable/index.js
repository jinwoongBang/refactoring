function distanceTravelled(scenario, time) {
  let result;
  
  const primary = new Primary(scenario, time);

  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도 (a) = 힘 (F) / 질량 (m)
  const primaryTime = Math.min(time, senario.delay);
  const primaryVelocity = primaryAcceleration * scenario.delay;

  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  

  let secondaryTime = time - scenario.delay;
  const secondaryAcceleration =
    (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // 두 번째 힘을 반영해 다시 계산

  if (secondaryTime > 0) {
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}

class Primary {
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
