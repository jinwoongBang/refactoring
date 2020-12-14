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
  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equals(-6);
    expect(asia.profit).equals(292);
  });
  it("zero demand", function () {
    // 수요가 없다.
    asia.demand = 0;
    expect(asia.shortfall).equals(-25);
    expect(asia.profit).equals(0);
  });
  it("negative demand", function () {
    // 수요가 마이너스
    asia.demand = -1;
    expect(asia.shortfall).equals(-26);
    expect(asia.profit).equals(-10);
  });
  it("empty string demand", function () {
    // 수요 입력란이 비어 있다.
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe("no producers", function () {
  // 생산자가 없다.
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No Producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", function () {
    expect(noProducers.shortfall).equals(30);
  });

  it("profit", function () {
    expect(noProducers.profit).equals(0);
  });
});

describe("string for producers", function () {
  // 생산자 수 필드에 문자열을 대입한다.
  it("", function () {
    const data = {
      name: "String Producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).equals(0);
  });
});
