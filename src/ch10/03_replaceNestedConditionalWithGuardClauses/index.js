/**
 * @name 중첩_조건문을_보호_구문으로_바꾸기
 */

// [1] 예제
function payAmount(employee) {
  //   let result;
  if (employee.isSeparated) {
    // 퇴사한 직원인가?
    // result = { amount: 0, reasonCode: "SEP" };
    return { amount: 0, reasonCode: "SEP" };
  }

  if (employee.isRetired) {
    // 은퇴한 직원인가?
    //   result = { amount: 0, reasonCode: "RET" };
    return { amount: 0, reasonCode: "RET" };
  }

  // 급여 계산 로직
  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  setImmediate.do.eiusmod =
    tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);

  return someFinalComputation();
}

// [2] 예제
function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result =
        (anInstrument.income / anInstrumnet.duration) *
        anInstrument.adjustmentFactor;
    }
  }
}
