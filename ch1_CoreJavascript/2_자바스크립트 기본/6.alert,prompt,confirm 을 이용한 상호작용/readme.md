## alert
```javascript
alert("Hello");
```

## prompt
```javascript
esult = prompt(title, [default]);
```

브라우저에서 제공하는 prompt 함수는 두 개의 인수를 받습니다.
함수가 실행되면 텍스트 메시지와 입력 필드(input field), 확인(OK) 및 취소(Cancel) 버튼이 있는 모달 창을 띄워줍니다.
`title`
사용자에게 보여줄 문자열
`default`
입력 필드의 초깃값(선택값)
### 인수를 감싸는 대괄호 [...]의 의미
`default`를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미합니다.

```javascript
let age = prompt('나이를 입력해주세요', 100);
alert(`당신의 나이는 ${age} 입니다`);
```

Internet Explorer(IE)에서는 항상 '기본값’을 넣어주세요.
프롬프트 함수의 두 번째 매개변수는 선택사항이지만, 이 매개변수가 없는 경우 IE는 "undefined"를 입력 필드에 명시합니다.

## confirm
````javascript
let isBoss = confirm("당신이 주인인가요?");

alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.
```


