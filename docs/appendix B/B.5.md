## B.5 타입 지정

```ts
let member0 = '모모';
let member1 : string = '사나';
let member2 : any = '미나';

member1 = 1996;
member2 = 1997;
```

### B.5.1 함수
```ts
function sing(idol: string, song: string, members: number): string {
  return '';
}

let str: string = sing('트와이스', 'Signal', 9);
```
