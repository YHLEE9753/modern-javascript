let val = true;
alert(typeof val);
alert(String(val));
let str = "1234";
alert(Number(str));
alert(Number(true));        // 1
alert(Number(false));       // 0

// 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
// 그 외의 값은 true로 변환됩니다.
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)

// 주의: 문자열 "0"은 true입니다.
// PHP 등의 일부 언어에선 문자열 "0"을 false로 취급합니다. 그러나 자바스크립트에선 비어 있지 않은 문자열은 언제나 true입니다.



