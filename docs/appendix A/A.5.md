## A.5 화살표 함수 표현식과 this

전달 인자 선언`()`, 화살표`=>`, 함수 몸체`{}`로 구성된다. 함수 몸체가 표현식 하나라면 `{}`, `return`을 생략할 수 있다.
```js
let unit = (member0, member1) => member0 + member1;
```

함수 몸체가 여러 줄이라면 `{}`, `return`을 생략할 수 없다.
```js
(member0, member1) => {
  // do somthing
  return member0 + memeber1;
}
```

전달 인자가 없으면 빈 괄호를 사용한다.
```js
() => {
  // do somthing
  reutrn "사나" + "쯔위";
}
```

전달 인자가 하나라면 괄호를 생략할 수 있다.
```js
member => {
  // do somthing
  reutrn member;
}
```

```js
var twice = {
  song: "Signal",
  sing() {
    setTimeout(() => {
      console.log(this.song);
    }, 1000);
  }
}

twice.sing();
```

### A.5.1 나머지 연산자(Rest Operator), 전개 연산자(Spread Operator)

```js
function sing(song, ...members) {
  console.log(`${members} are singing a ${song}`);
}

sing("Signal", "사나", "정연", "쯔위");
```

```js
function sing(member0, member1, member2, song) {
  console.log(`${member0}, ${member1}, and ${member2} are singing a ${song}`);
}
var members = ["사나", "정연", "쯔위"];
sing(...members, "Signal");
```

### A.5.2 제너레이터(Generators)
```js
function* sing() {
  console.log("TT");
  yield;
  console.log("Signal");
}

var iterator = sing();
iterator.next();
iterator.next();
```

### A.5.3 비구조화(Destructuring)
```js
function getMember() {
  return {
    name: "쯔위",
    age: 18
  };
}

let { name, age } = getMember();
console.log(`${name}, ${age}`);
```

```js
function getMember() {
  return {
    name: "나연",
    age: 21
  };
}

let { name, age, team = "트와이스" } = getMember();
console.log(`${name}, ${age}, ${team}`);
```

```js
function getMember() {
  return {
    name: "다현",
    age: 19,
    physical: {
      height: 159,
      weight: 48.9
    }
  };
}

let { name, age, physical: { height, weight } } = getMember();
console.log(`${name}, ${age}, ${height}, ${weight}`);
```

```js
let [member0, memeber1] = ["지효", "채영"];
console.log(member0, memeber1);
```

```js
let [member0, , , , memeber1] = ["나연", "정연", "모모", "사나", "지효"];
console.log(member0, memeber1);
```

```js
let [member0, memeber1, ...others] = ["나연", "정연", "모모", "사나", "지효"];
console.log(member0, memeber1, others);
```
