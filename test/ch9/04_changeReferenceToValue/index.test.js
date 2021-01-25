import assert from "assert";
import chai from "chai";

import {
  Person,
  TelephoneNumber,
} from "../../../src/ch9/04_changeReferenceToValue/index.js";

describe("[9-4] 참조를 값으로 바꾸기 테스트", () => {
  it("telephone equals", () => {
    assert(
      new TelephoneNumber("312", "555-0142").equals(
        new TelephoneNumber("312", "555-0142")
      )
    );
  });
});
