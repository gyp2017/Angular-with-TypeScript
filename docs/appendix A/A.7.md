## A.7 클래스와 상속

```js
class Singer {
  //
}

class Idol extends Singer {
  //
}

let twice = new Idol();
```

```js
class Singer {
  sing() {
    console.log("sing...");
  }
}
```

### A.7.1 생성자
```js
class Singer {
  constructor(name) {
    this.name = name;
  }
}

let singer = new Singer("트와이스");
console.log(singer.name);
```

```js
class Singer {
  constructor(name) {
    this.name = name;
  }
}

class Idol extends Singer {

}

let idol = new Idol("트와이스");
console.log(idol.name);
```

### A.7.2 정적 변수(static variables)
```js
class Idol {}
Idol.company = "JYP Ent.";

console.log(Idol.company);
```

### A.7.3 게터(getters), 세터(setters), 메소드 정의
```js
let Twice = {
  company: "JYP Ent.",
  get agency () { return this.company; },
  set agency (company) { this.company = company; }
}

Twice.agency = "SM Ent.";
console.log(Twice.agency);
```

### A.7.4 super 키워드와 super() 함수
```js
class Singer {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  }
}

class Idol extends Singer {
  constructor(name, team) {
    super(name);
    this.team = team;
  }

  greeting() {
    super.greeting();
    console.log(`소속은 ${this.team} 입니다.`);
  }
}

let idol = new Idol("쯔위", "트와이스");
idol.greeting();
```
