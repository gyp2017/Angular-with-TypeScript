## B.3 TypeScript 시작하기

### B.3.1 TypeScript 설치하고 실행하기

```sh
$ npm i -g typescript
$ yarn add typescript
```

```sh
$ tsc -v
Version 2.3.4
```

```sh
$ tsc main.ts
```

```sh
$ tsc main.ts --sourcemap
```

```sh
$ tsc main.ts --t ES5
```

```sh
$ tsc -w *.ts
```

`tsconfig.json`
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```
