## B.6 클래스

### B.6.1 접근 제한자

```ts
class Idol {
  public name: string;
  public nationality: string;
  private _height: number;
  private _weight: number;

  constructor(name: string, nationality: string, height: number, weight: number) {
    this.name = name;
    this.nationality = nationality;
    this._height = height;
    this._weight = weight;
  }
}

let idol = new Idol('정연', 'KR', 167, 49);
console.log(`${idol.name}, ${idol._height}`);
```

```ts
class Idol {
  constructor(public name: string, public nationality: string, private _height: number, private _weight: number) {
  }
}
```

### B.6.2 메소드
```ts
class Idol {
  constructor(public name: string, private _weight?: number) {
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }
}

let idol = new Idol('쯔위', 52);
idol.weight = 51;

console.log(`${idol.name}, ${idol.weight}`);
```

### B.6.3 상속
