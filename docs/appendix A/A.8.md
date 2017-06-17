## A.8 프로미스로 비동기 작업 처리하기

### A.8.1 콜백 지옥(callback hell)

### A.8.2 프로미스(Promises)
```js
let getMembers = () => {
  return new Promise((resolve, reject) => {
    console.log("Getting members");

    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("지효");
      } else {
        reject("Can't get members");
      }
    }, 1000);
  })
}

getMembers()
  .then(member => console.log(member))
  .catch(err => console.log(err))
console.log("Invoked getMembers.");
```

```js
Getting members
Invoked getMembers.
지효
```

```js
let getIdols = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Twice");
      } else {
        reject("Can't get Idols");
      }
    }, 1000);
  });

  return promise;
}
let getSongs = (idols) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve(`Found the song SIGNAL for ${idols}`);
      } else {
        reject("Can't get Songs");
      }
    }, 1000);
  });

  return promise;
}

getIdols()
  .then(idols => getSongs(idols))
  .then(songs => console.log(songs))
  .catch(err => console.log(err));
```

```js
Found the song SIGNAL for Twice
```

### A.8.3 프로미스 병렬 처리
```js
Promise
  .all([getIdols(), getSongs()])
  .then(results => console.log(results));
```

```js
["Twice", "Found the song SIGNAL for undefined"]
```
