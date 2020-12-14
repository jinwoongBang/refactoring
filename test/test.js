// const assert = require("assert");
// const { sampleProvinceData, Province } = require("../src/ch4/Province");
import assert from "assert";
import chai from "chai";
import { sampleProvinceData, Province } from "../src/ch4/Province.js";

const expect = chai.expect;

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData()); // [1] 픽스쳐 설정 (고정장치)
    assert.equal(asia.shortfall, 5); // [2] 검증
  });
});

describe("province", function () {
  let asia;
  // beforeEach 는 각각 테스트 바로 전에 실행 됨.
  beforeEach(function () {
    asia = new Province(sampleProvinceData()); // [1] 픽스쳐 설정 (고정장치)
  });
  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    expect(asia.profit).equals(230);
  });
});
