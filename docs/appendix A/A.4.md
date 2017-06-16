## A.4 변수 스코프

### A.4.1 변수 호이스팅

### A.4.2 let과 const를 사용하는 변수 스코프

```js
let singer = "사나";

(function () {
  // ReferenceError
  // console.log(singer);

  let singer = "모모";
  console.log(singer);
})();

console.log(singer);

if (true) {
  let singer = "미나";
  console.log(singer);
}

// SyntaxError
// let singer = "사나";

console.log(singer);
```

```js
모모
사나
미나
사나
```
