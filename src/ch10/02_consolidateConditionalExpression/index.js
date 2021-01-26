/**
 * @name 조건식_통합하기
 */

// [or 조건문 예시]
function disablityAmount1(anEmployee) {
  if (isNotEligibleForDisability()) {
    return 0;
  }
  // TODO: 장애 수당 계산
}

function isNotEligibleForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}

// [and 조건문 예시]
function disablityAmount2() {
  if (anEmployee.onVacation && anEmployee.seniority > 10) {
    return 1;
  }
  return 0.5;
}
