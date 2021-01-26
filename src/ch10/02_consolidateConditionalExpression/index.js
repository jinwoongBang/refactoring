/**
 * @name 조건식_통합하기
 */

function disablityAmount(anEmployee) {
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
