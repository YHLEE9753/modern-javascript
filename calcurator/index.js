// 실습 설명
// 1. 두 숫자를 연산하는 계산기를 구현한다.
// 2. 숫자와 연산기호는 클릭하여 입력한다.
// 3. 숫자 - 연산기호 - 숫자 - 등호 순으로 클릭한다.
// 4. 등호 클릭하면 결과가 나온다.
// 4. 초기화는 새로고침으로 한다.

// 힌트
// 1. document.querySelector를 활용해 element를 가져온다.
// 2. addEventListener를 활용해 클릭 이벤트를 등록한다.

// ==== original existing elements values ====
const oneOriginalVal = 'number a';
const twoOriginalVal = 'number b';
const resultOriginalVal = 'sign';

// ==== button events ====
const numberTags = {
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

    'inputNumberA' : '#input-number-a',
    'inputNumberB' : '#input-number-b'
};

let one = document.querySelector(numberTags.inputNumberA);
let two = document.querySelector(numberTags.inputNumberB);

function buttonFunc(id, num) {
    const button = document.querySelector(id);
    const val = num

    button.addEventListener('click', () => {
        if (one.innerText === oneOriginalVal) {
            one.innerText = val;
        } else if (two.innerText === twoOriginalVal) {
            two.innerText = val;
        }
    })
}


buttonFunc(numberTags.zero, 0);
buttonFunc(numberTags.one, 1);
buttonFunc(numberTags.two, 2);
buttonFunc(numberTags.three, 3);
buttonFunc(numberTags.four, 4);
buttonFunc(numberTags.five, 5);
buttonFunc(numberTags.six, 6);
buttonFunc(numberTags.seven, 7);
buttonFunc(numberTags.eight, 8);
buttonFunc(numberTags.nine, 9);

// ==== operator ====
const operatorTags = {
    'add': '#sign-plus',
    'minus': '#sign-minus',
    'multiple': '#sign-multiple',
    'divide': '#sign-divide'
}
const operators = {
    'add': '+',
    'minus': '-',
    'multiple': '*',
    'divide': '/'
}

const inputSign = '#input-sign'
const operator = document.querySelector(inputSign);

function operatorFunc(id, oper) {
    const operation = document.querySelector(id);
    operation.addEventListener('click', () => {
        operator.innerText = oper;
    })
}

operatorFunc(operatorTags.add, operators.add);
operatorFunc(operatorTags.minus, operators.minus);
operatorFunc(operatorTags.multiple, operators.multiple);
operatorFunc(operatorTags.divide, operators.divide);


// ==== result  ====
const inputResult = '#input-result';
const calculator = document.querySelector('#sign-equal');

calculator.addEventListener('click', () => {
    const oneVal = one.innerText;
    const twoVal = two.innerText;
    const operatorVal = operator.innerText;

    const isValidCondition = !(oneVal === oneOriginalVal) && 
                             !(twoVal === twoOriginalVal) && 
                             !(operatorVal === resultOriginalVal)

    if (isValidCondition) {
        const result = document.querySelector(inputResult);

        if (operatorVal === operators.add) {
            result.innerText = Number(oneVal) + Number(twoVal);
        } else if (operatorVal === operators.minus) {
            result.innerText = Number(oneVal) - Number(twoVal);
        } else if (operatorVal === operators.multiple) {
            result.innerText = Number(oneVal) * Number(twoVal);
        } else if (operatorVal === operators.divide) {
            result.innerText = Number(oneVal) / Number(twoVal);
        }
    }
})