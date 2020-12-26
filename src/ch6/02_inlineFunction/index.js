/**
 *
 * @deprecated{
 *  함수를 굳이 나눌 필요가 없을 때 Inline 하는 것이 좋다.
 *  1. 반대 리팩터링 : 함수 추출하기
 * }
 */
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
