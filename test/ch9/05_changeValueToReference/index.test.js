import assert from "assert";
import chai from "chai";

import {
  Order,
  Customer,
} from "../../../src/ch9/05_changeValueToReference/index.js";

describe("[9-5] 값을 참조로 바꾸기 테스트", () => {
  it("Customer equals", () => {
    const customerA = new Customer(1);
    const customerB = new Customer(1);
    assert(customerA.id === customerB.id);
  });
  it("Customer not equals", () => {
    const customerA = new Customer(1);
    const customerB = new Customer(2);
    assert(customerA.id !== customerB.id);
  });
});
