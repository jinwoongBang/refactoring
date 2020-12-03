// const assert = require("assert");
// const { sampleProvinceData, Province } = require("../src/ch4/Province");
import assert from "assert";
import { sampleProvinceData, Province } from "../src/ch4/Province.js";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData()); // [1] 픽스쳐 설정 (고정장치)
    assert.equal(asia.shortfall, 5); // [2] 검증
  });
});
