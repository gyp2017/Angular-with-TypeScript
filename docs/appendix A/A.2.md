## A.2 템플릿 리터럴
문자열 삽입(string interpolation). 역따옴표(backtick, ``)

```js
var sana = "サナ";
console.log(`Hello ${sana}`);

function getMina() {
  return "ミナ";
}
console.log(`Hello ${getMina()}`);
```

```js
"Hello サナ"
"Hello ミナ"
```

### A.2.1 여러 줄에 걸친 문자열

```js
var message = `Trying to let you know
              I send you a sign, send you a signal
              I must let you know
              I send you a sign, send you a signal`;
console.log(message);
```

```js
Trying to let you know
              I send you a sign, send you a signal
              I must let you know
              I send you a sign, send you a signal
```

### A.2.2 태그가 붙는 템플릿 스트링

```js
function myTag(stringParts, name) {
  console.log(stringParts);
  console.log(name);
}

var name = "정연";
myTag`Hello ${name}!`;
```

```js
Array ["Hello ", "!"]
"정연"
```
