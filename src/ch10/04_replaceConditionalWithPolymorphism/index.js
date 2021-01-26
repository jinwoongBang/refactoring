/**
 * @name 조건부_로직을_다형성으로_바꾸기
 * @summary {
 *  새의 종에 따른 비행 속도와 깃털 상태를 알려주는 로직
 * }
 * @description {
 *  아카이브 상태, 리스토어 상태 등 상태에 대한 로직을 이렇게 해도 괜찮을 듯
 *  그리고 Bird 클래스를 상속 받는 객체들 처럼 KeyFlowVO 객체도 Object.assign 으로 복사에서 객체를 new 생성해도 될것 같은데?????
 * }
 */

// 깃털 상태
function plumages(birds) {
//   return new Map(birds.map((b) => [b.name, plumage(b)]));
  return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]));
}

// 비행 속도
function speeds(birds) {
//   return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.airSpeedVelocity]));
}

function createBird(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return "알 수 없다";
  }

  get airSpeedVelocity() {
   return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "보통이다";
  }
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
}
