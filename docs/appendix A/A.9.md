## A.9 모듈

- AMD
- CommonJS

### A.9.1 import & export

`idol.js`
```js
export let idol = "";

export function sing() {

}

function dance() {

}
```

```js
import { idol, sing } from 'idol';

if (idol) {
  sing();
}
```

`twice.js`
```js
export default function() {

}

export let members = "";
```

```js
import twice, { members } from 'twice';

twice();
```

```js
import TwiceFunciton, { members as Idols } from 'twice';
```

### A.9.2 모듈 동적 로딩
