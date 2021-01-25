const { assert } = require("chai");

class ProductionPlan {
  get production() {
    // 코드 수정전 테스트를 위한 Assertion
    // 테스트를 통과 했다면 결과값 변경
    // assert(this._production === this.calculatedProduction);
    return this.calculatedProduction;
  }

  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    // this._production += anAdjustment.amount;
  }
}
 