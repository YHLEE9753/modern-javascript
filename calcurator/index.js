// 실습 설명
// 1. 두 숫자를 연산하는 계산기를 구현한다.
// 2. 숫자와 연산기호는 클릭하여 입력한다.
// 3. 숫자 - 연산기호 - 숫자 - 등호 순으로 클릭한다.
// 4. 등호 클릭하면 결과가 나온다.
// 4. 초기화는 새로고침으로 한다.

// 힌트
// 1. document.querySelector를 활용해 element를 가져온다.
// 2. addEventListener를 활용해 클릭 이벤트를 등록한다.

// ==== button events ====
const numbers = {
    'zero': '#number-zero',
    'one': '#number-one',
    'two': '#number-two',
    'three': '#number-three',
    'four': '#number-four',
    'five': '#number-five',
    'six': '#number-six',
    'seven': '#number-seven',
    'eight': '#number-eight',
    'nine': '#number-nine',
};

let one = document.querySelector('#input-number-a');
let two = document.querySelector('#input-number-b');

function buttonFunc(tag, num) {
    const button = document.querySelector(tag);
    const val = num

    button.addEventListener('click', () => {
        if (document.querySelector('#input-number-a').innerText === 'number a') {
            one.innerText = val;
        } else if (document.querySelector('#input-number-b').innerText === 'number b') {
            two.innerText = val;
        }
    })
}

buttonFunc(numbers.zero, 0);
buttonFunc(numbers.one, 1);
buttonFunc(numbers.two, 2);
buttonFunc(numbers.three, 3);
buttonFunc(numbers.four, 4);
buttonFunc(numbers.five, 5);
buttonFunc(numbers.six, 6);
buttonFunc(numbers.seven, 7);
buttonFunc(numbers.eight, 8);
buttonFunc(numbers.nine, 9);

// ==== operator ====
const operators = {
    'add': '#sign-plus',
    'minus': '#sign-minus',
    'multiple': '#sign-multiple',
    'divide': '#sign-divide',
}

const operator = document.querySelector('#input-sign');

function operatorFunc(tag, oper) {
    const operation = document.querySelector(tag);
    operation.addEventListener('click', () => {
        operator.innerText = oper;
    })
}

operatorFunc(operators.add, "+");
operatorFunc(operators.minus, "-");
operatorFunc(operators.multiple, "*");
operatorFunc(operators.divide, "/");


// ==== result  ====
const calculator = document.querySelector('#sign-equal');

calculator.addEventListener('click', () => {
    const oneVal = one.innerText;
    const twoVal = two.innerText;
    const operatorVal = operator.innerText;

    if (!(oneVal === 'number a') && !(twoVal === 'number b') && !(operatorVal === 'sign')) {
        const result = document.querySelector('#input-result')
        if (operatorVal === "+") {
            result.innerText = Number(oneVal) + Number(twoVal);
        } else if (operatorVal === "-") {
            result.innerText = Number(oneVal) - Number(twoVal);
        } else if (operatorVal === "*") {
            result.innerText = Number(oneVal) * Number(twoVal);
        } else if (operatorVal === "/") {
            result.innerText = Number(oneVal) / Number(twoVal);
        }
    }
})