alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.
alert( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
alert( '6' / '2' ); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert( +true ); // 1
alert( +"" );   // 0


let apples = "2";
let oranges = "3";

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
alert( +apples + +oranges ); // 5
// `Number(...)`를 사용해서 같은 동작을 하는 코드를 작성할 수 있지만, 더 기네요.
// alert( Number(apples) + Number(oranges) ); // 5


let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


let counter = 1;
let aa = counter++; // (*) ++counter를 counter++로 바꿈

alert(aa); // 1
let aaa = true;
let bbb = false;
alert(+aaa);
alert(+bbb);
