# Refactoring

---

### 1. 리팩토링의 첫 단계

---

### 4. 테스트 코드 작성

---

### 6. 기본적인 리팩토링

#### 1) 함수 추출하기 : Extract Function

- 중복되는 함수의 추출

#### 2) 함수 인라인하기 : Inline Function

- 한 번만 사용되는 함수는 추출할 필요 없음
- 함수 추출하기 반대

#### 3) 변수 추출하기 : Extract Variable

- 함수 추출과 동일

#### 4) 변수 인라인하기 : Inline Variable

- 함수 인라인과 동일

#### 5) 함수 선언 바꾸기(함수 이름 바꾸기) : Change Function Declaration

- 이름만 봐도 무슨 역할인지 인지 할 수 있도록 작성
- 상위 객체를 포함하는 변수명 제거
- 이름이 생각나지 않을 땐 기능별로 주석을 달아보면 멋진 변수명이 생각날 수 있다

#### 6) 변수 캡슐화하기 : Encapsulate Variable

- 데이터를 변경하고 사용하는 코드를 감시 할수 있는 확실한 통로가 되어줌
- 때문에 변경 전, 후 검증이나 추가 로직을 쉽게 삽입 가능
- 데이터에 대한 결합도가 높아지는 것을 막는다.

#### 7) 변수 이름 바꾸기 : Rename Variable

- 변수명 앞에 타입을 붙여주는 것도 좋다

#### 8) 매개변수 객체 만들기 : Introduce Parameter Object

- VO(Value Object) 로 매개변수 전달하는 것
- 클래스(VO)로 만들어 두면 관련 동작들을 이 클래스로 옮길 수 있는 이점.

#### 9) 여러 함수를 클래스로 묶기 : Combine Functions into Class

- 공통된 데이터를 가지고 동작하는 함수들이 많을 경우 하나의 클래스로 묶으면 좋다.

#### 10) 여러 함수를 변환 함수로 묶기 : Combine Functions into Transform

- 6.9 여러 함수를 클래스로 묶기와 비슷하다.
- 중요한 차이는 원본 데이터가 코드 안에서 갱신될 때는 클래스로 묶는 편이 훨씬 낫다.
- 기존 데이터에 필요한 정보를 추가하여 return 해주는 것
- 불변성을 유지하기 위해 깊은 복사를 통해 원본 데이터에 영향을 주지않아야 한다

#### 11) 단계 쪼개기 : Split Phase

- 장황한 코드를 기능별로 쪼개는 것
- 명령줄 호출과 표준 출력에 쓰는 느리고 불편한 작업과 자주 테스트해야 할 복잡한 동작을 분리함으로써 테스트를 더 쉽게 수행하게 만들었다.
  (험블 객체 패턴)
- 여기서도 단계별 매개변수들을 클래스로 캡슐화 함으로써 여러 기능들을 클래스 안에서 처리

---

### 7. 캡슐화

- 캡슐화가 잘 되어 있다면 무언가를 변경해야 할 때 함께 고려해야할 모듈 수가 적어져서 코드를 변경하기 훨씬 쉬워진다.

#### 1) 레코드 캡슐화하기 : Encapsulate Record

- 모든 쓰기를 함수 안에서 처리한다 는 것이 핵심
- 내부 데이터를 복제해서 제공하는 것도 한 방법
- 자기 자신 또는 내부 데이터에 getter, setter 를 통해만 접근 할 수 있도록 변경

#### 2) 컬렉션 캡슐화하기 : Encapsulate Collection

- getter 가 컬렉션 자체를 반환하도록 한다면, 캡슐화의 의미가 없다.
  (원본 모듈 밖에서 컬렉션을 수정하지 않는 습관을 갖고 있따면 상관 없다.)
- add(), remove() 를 사용하여 컬렉션 객체의 데이터를 변경하도록 수정

#### 3) 기본형을 객체로 바꾸기 : Replace Primitive with Object

- 클래스(VO) 형태로 바꿔주는 것과 비슷하다.
- 예를 들어 어떤 VO 타입의 List 를 filter() 해야 한다면, 조건 로직을 VO 안에 넣어 코드를 간결하게 가져갈 수 있다.

#### 4) 임시 변수를 질의 함수로 바꾸기 : Replace Temp with Query

- 어떤 조건에 의해 변동되는 값을 가지는 임시 변수가 있다면, 클래스 내에서 조건문의 함수(질의 함수)로 변경.

#### 5) 클래스 추출하기 : Extract Class

- Person 내 비슷한 데이터들을 분류하여 클래스(VO) 로 추출하는 것
- 클래스는 반드시 명확하게 추상화하고 소수의 주어진 역할만 처리해야 함.
- 일부 데이터와 메서드를 따로 묶을 수 있다면 분리 하라는 신호.

#### 6) 클래스 인라인하기 : Inline Class

- '클래스 추출하기' 의 반대
- 리팩토링을 하고 난 후 특정 클래스에 남은 역할이 거의 없을 때 이런 현상이 자주 생긴다.
- 이럴 땐 가장 많이 사용하는 클래스로 흡수(인라인) 시켜버리자.

#### 7) 위임 숨기기 : Hide Delegate

```javascript
manager = aPerson.department.manager;

manager = aPerson.manager;
class Person {
  get manager() {
    return this.department.manager;
  }
}
```

#### 8) 중개자 제거하기 : Remove Middle Man

- '위임 숨기기' 의 반대
- 클라이언트가 위임 객체의 또 다른 기능을 사용하고 싶을 때마다 서버에 위임 메서드를 추가해야 하는데
- 단순히 전달만 하는 위임 메서드들이 있다면 과감히 중개자를 제거한다.

#### 9) 알고리즘 교체하기 : Substitute Algorithm

- javascript 내 제공하는 API 를 되도록 사용하자

---

### 8. 기능 이동

#### 1) 함수 옮기기 : Move Function

- 중첩 함수를 최상위로 옮기기
  - 임시 함수를 만들고 그 임시 함수를 원래 함수에서 호출하도록 한다.
  - 이상이 없다면 임시 함수의 이름을 원래 함수로 바꾸어 리팩토링 완료.
- 다른 클래스로 옮기기

#### 2) 필드 옮기기 : Move Field

- 공유 객체로 이동하기

#### 3) 문장을 함수로 옮기기 : Move Statements into Function

- 공통된 로직을 하나의 함수로 옮기기
- 예를들어, 공통된 html 태그 출력 시 사용

#### 4) 문장을 호출한 곳으로 : 옮기기 Move Statements to Callers

- 문장을 함수로 옮기기 반대
- 하나의 함수로 묶어 두었던 기능이 일부 호출자에게 다르게 동작하도록 바뀌어야 할 때,
- 다시 밖으로 내어 사용

#### 5) 인라인 코드를 함수 호출로 바꾸기 : Replace Inline Code with Function Call

```javascript
// before
let appliesToMass = false;
for (const s of states) {
  if (s === "MA") {
    appliesToMass = true;
  }
}
// after
appliesToMass = states.includes("MA");
```

#### 6) 문장 슬라이드하기 : Slide Statements

- 관련된 변수, 함수를 모아두는 것
- 명령-질의 분리 원칙을 지킬 것
- 값을 반환하는 함수는 모두 부수효과가 없어야한다.
  (작성된 함수는 자기 자신 내부 데이터 이외의 다른 데이터를 변경해선 안되다는 뜻 아닐까?)

#### 7) 반복문 쪼개기 : Split Loop

- 반복문 내 2가지 이상의 로직을 갖고 있다면 분리해라.
- 성능에 대한 이슈는 그 다음 문제이다.
- 반복문의 반복으로 병목 현상이 발생되면 그때 하나로 합치자.

#### 8) 반복문을 파이프라인으로 바꾸기 : Replace Loop with Pipeline

- map, filter, reduce 등 컬렉션 함수, 람다 함수 사용
- 코드가 매우 깔끔해짐

#### 9) 죽은 코드 제거하기 : Remove Dead Code

- 안쓰는 코드 삭제

---

### 9. 데이터 조직화

#### 1) 변수 쪼개기

- 역할이 둘 이상인 변수가 있다면 쪼개라.
- 역할 하나당 변수 하나다.

```javascript
// before
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);
// after
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);
```

#### 2) 필드 이름 바꾸기

- 변수명을 수정할 때는 차근차근 단계별로 수정한다.
- 수정 전 변수도 동작하게 만들고
- 수정 후 변수도 동작하게 만든 후
- 수정 전 변수를 삭제한다.

```javascript
// before
class Organization {
  get name() {
    return this._name;
  }
}
// after
class Organization {
  get title() {
    return this._title;
  }
}
```

#### 3) 파생 변수를 질의 함수로 바꾸기

- 가변 데이터 끼리 영향을 미쳐 오류를 야기하는 경우를 방지하기 위해 사용
- 아래 예시 처럼 discount(할인율)을 변경하는데
- discountedTotal(할인된 총액)도 같이 변경하면 문제가 발생
- 때문에 discountedTotal(할인된 총액) 을 꺼내 쓸 때 계산되도록 수정

```javascript
// before
class Price {
  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(aNumber) {
    const old = this._discount;
    this._discount = aNumber;
    this._discountedTotal += old - aNumber;
  }
}
// after
class Price {
  get discountedTotal() {
    return this._baseTotal - this._discount;
  }
  set discount(aNumber) {
    this._discount = aNumber;
  }
}
```

#### 4) 참조를 값으로 바꾸기

- 잘 모르겠다..
- 불변성 관련된 내용인듯?
- 불변성 관련한 내용을 좀더 공부해보고 다시 보겠다.

- '값 객체는 분산 시스템과 동시성 시스템에서 유용하다' 이게 중요한 키워드였음
- 여러 스레드에서 데이터를 바꾸려고 할 때 데이터의 무결성? 을 지켜준다.
- 근데 더 시간이 지나봐야 몸으로 느낄 듯...

```javascript
// before
class Product {
  applyDiscount(arg) {
    this._price.amount -= arg;
  }
}
// after
class Product {
  applyDiscount(arg) {
    this._price = new Money(this._price.amount - arg, this._price.currency);
  }
}
```

#### 5) 값을 참조로 바꾸기

- 이것도 잘모르겠다...
- 리팩토링에 대한 이점이 무엇일까????? ㅜㅜ

```javascript
// before
let customer = new Customer(customerData);
// after
let customer = customerRepository.get(customerData.id);
```

#### 6) 매직 리터럴 바꾸기

- 특정 값을 상수화
- 이렇게 되면 aValue === "M" 또는 aValue === MALE_GENDER 로 바꾸기 보다
- isMale(aValue) 라는 함수를 호출하는 방법을 더 선호

```javascript
// before
function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}
// after
const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
```
