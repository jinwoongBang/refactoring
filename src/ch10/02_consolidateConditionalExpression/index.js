/**
 * @name 조건식_통합하기
 */

function disablityAmount(anEmployee) {
  if (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  ) {
    return 0;
  }
  // TODO: 장애 수당 계산
}
