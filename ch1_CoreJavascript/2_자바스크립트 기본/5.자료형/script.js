// 1. 숫자형
// 숫자형(number type) 은 정수 및 부동소수점 숫자(floating point number)를 나타냅니다.
// 숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN같은 '특수 숫자 값(special numeric value)'이 포함됩니다.
let n = 123;
n = 12.345;
n = Infinity
n = -Infinity

// NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값입니다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데, 이때 NaN이 반환됩니다.
alert("숫자가 아님"/2); //Nan

// 자바스크립트에서 행해지는 수학 연산은 '안전’하다고 볼 수 있습니다. 0으로 나눈다거나 숫자가 아닌 문자열을 숫자로 취급하는 등의 이례적인 연산이 자바스크립트에선 가능합니다.
// 말이 안 되는 수학 연산을 하더라도 스크립트는 치명적인 에러를 내뿜으며 죽지 않습니다. NaN을 반환하며 연산이 종료될 뿐입니다.

// 2. BigInt
// 내부 표현 방식 때문에 자바스크립트에선 (2^53-1)(9007199254740991) 보다 큰 값 혹은 -(2^53-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.
// BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있습니다.
// BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.

const bigInt = 12345566666666666666666666666666666666n;
// 이 글이 작성된 시점엔 Firefox, Chrome, Edge, Safari에서만 BigInt를 지원합니다. IE에선 지원하지 않습니다.


// 3. 문자형
let str = "hello";
let str2 = "single two data";
let phrase = `can embed another ${str}`;

alert(`test is ${str}`)
alert(`test is ${1+2}`)


// 4. 불린형
// true, false

let xxx = false;
let yyy = true;
let isGreater = 3 > 1;

// 5. null 값
// 하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
// let age = null;은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.
let age = null;

// 6. undefined 값
let newAge;
alert(newAge)

let age2 = 100;
age2 = undefined;

// 7,8. 객체와 심볼
// 객체(object)형은 특수한 자료형입니다.
// 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다. 반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.
// 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다. 심볼형에 대해선 객체를 학습하고 난 이후에 자세히 알아보겠습니다.

// + typeof 연산자
typeof undefined
typeof 0
typeof 10n
//-------------------
typeof Math // object
typeof null // object
typeof alert // function
// Math는 수학 연산을 제공하는 내장 객체이므로 "object"가 출력됩니다. Math에 대해선 숫자형 챕터에서 학습하도록 하겠습니다. 내장 객체는 객체형이라는 것을 알려주기 위해 이런 예시를 작성해 보았습니다.
// typeof null의 결과는 "object"입니다. null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만, 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다. 언어 자체의 오류이므로 null이 객체가 아님에 유의하시기 바랍니다.
// typeof는 피연산자가 함수면 "function"을 반환합니다. 그러므로 typeof alert는 "function"을 출력해줍니다. 그런데 '함수’형은 따로 없습니다. 함수는 객체형에 속합니다. 이런 동작 방식이 형식적으론 잘못되긴 했지만, 아주 오래전에 만들어진 규칙이었기 때문에 하위 호환성 유지를 위해 남겨진 상태입니다. 한편, 실무에선 이런 특징이 매우 유용하게 사용되기도 합니다.







