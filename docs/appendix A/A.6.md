## A.6 forEach(), for-in, for-of

### A.6.1 forEach()
```js
var members = ["나연", "정연", "모모", "사나", "지효"];
members.description = 'Twice members';

members.forEach((m) => console.log(m));
```

```js
나연
정연
모모
사나
지효
```

### A.6.2 for-in
```js
var members = ["나연", "정연", "모모", "사나", "지효"];
members.description = 'Twice members';

for (let m in members) {
  console.log(m);
}
```

```js
0
1
2
3
4
description
```

```js
var members = ["나연", "정연", "모모", "사나", "지효"];
members.description = 'Twice members';

for (let m in members) {
  console.log(members[m]);
}
```

```js
나연
정연
모모
사나
지효
Twice members
```

### A.6.3 for-of
```js
var members = ["나연", "정연", "모모", "사나", "지효"];
members.description = 'Twice members';

for (let m of members) {
  console.log(m);
}
```

```js
나연
정연
모모
사나
지효
```
