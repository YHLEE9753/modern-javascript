# 엄격 모드
자바스크립트는 꽤 오랫동안 호환성 이슈 없이 발전해왔습니다. 기존의 기능을 변경하지 않으면서 새로운 기능이 추가되었죠.

덕분에 기존에 작성한 코드는 절대 망가지지 않는다는 장점이 있었습니다. 하지만 자바스크립트 창시자들이 했던 실수나 불완전한 결정이 언어 안에 영원히 박제된다는 단점도 생겼습니다.

이런 상황은 ECMAScript5(ES5)가 등장하기 전인 2009년까지 지속되었습니다. 그런데 새롭게 제정된 ES5에서는 새로운 기능이 추가되고 기존 기능 중 일부가 변경되었습니다. 기존 기능을 변경하였기 때문에 하위 호환성 문제가 생길 수 있겠죠? 그래서 변경사항 대부분은 ES5의 기본 모드에선 활성화되지 않도록 설계되었습니다. 대신 use strict라는 특별한 지시자를 사용해 엄격 모드(strict mode)를 활성화 했을 때만 이 변경사항이 활성화되게 해놓았습니다.

## use strict
지시자 "use strict", 혹은 'use strict'는 단순한 문자열처럼 생겼습니다. 하지만 이 지시자가 스크립트 최상단에 오면 스크립트 전체가 “모던한” 방식으로 동작합니다.

### "use strict"는 반드시 최상단에 위치시키세요.
"use strict"는 스크립트 최상단에 있어야 한다는 점을 잊지 마세요. 그렇지 않으면 엄격 모드가 활성화되지 않을 수도 있습니다.

다음 코드에서는 엄격 모드가 활성화되지 않습니다.

### use strict를 취소할 방법은 없습니다.
자바스크립트 엔진을 이전 방식으로 되돌리는 "no use strict"같은 지시자는 존재하지 않습니다.

일단 엄격 모드가 적용되면 돌이킬 방법은 없습니다.

## 브라우저 콘솔
개발한 기능을 테스트하기 위해 브라우저 콘솔을 사용하는 경우, 기본적으로 use strict가 적용되어있지 않는다는 점에 주의하셔야 합니다.

use strict에 영향을 받는 경우라면 개발자는 기대하지 않았던 결과를 얻을 수 있기 때문입니다.

그렇다면 어떻게 해야 콘솔에서 use strict를 사용할 수 있을까요?

'use strict’를 입력한 후, Shift+Enter키를 눌러 줄 바꿈 해 원하는 스크립트를 입력하면 됩니다. 아래와 같이 말이죠.

```javascript
'use strict'; <Shift+Enter를 눌러 줄 바꿈 함>
//  ...테스트하려는 코드 입력
<Enter를 눌러 실행>
```

```javascript
(function() {
  'use strict';

  // ...테스트하려는 코드...
})()
```