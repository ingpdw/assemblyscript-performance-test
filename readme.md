# WebAssembly

- C, C++, RUST, Typescript로 작성된 코드를 런타임 전에 webAssembly로 컴파일
- 컴파일된 바이너리(wasm)를 javascript를 통하여 브라우저에서 로딩 및 사용
- 컴파일된 binary wasm은 JavaScript엔진 내에서 실행.
  ![emscripten](emscripten-diagram.png)

### sample code

```
<html>
<body>
...
<script>
WebAssembly.instantiateStreaming(fetch('/optimized.wasm'), {}).then((wasm) => {
  // @TODO - Do something with the wasm!!!
});
</script>
</body>
</html>
```

# WebAssembly 장점

- pre-compile되어 있기 때문에 성능이 우수함
  - 대략 네이티브 코드보다는 20%느리다고 함
  - 하지만, 일반적으로 javascript보다는 빠른 연산속도
- cpu, memory자원 효율
  - 저수준 언어의 활용으로 메모리 관리 가능
  - memory-safe 보안에 강함
  - 산술연산, 그래픽연산(OpenGL)처리에 용이

# WebAssembly 장점

- wasm파일 초기 로딩 비용(최초 한번 로딩)
- compile의 번거로움

# Browser supported

[wasm](https://caniuse.com/wasm)

# AssemblyScript

- wasm을 생산 및 개발할 수 있는 방법 중 하나
- typeScript의 하위 언어
- 엄격한 타입(strictly typed)
- Binaryen을 활용하여 AssemblyScript 코드를 컴파일

# 개발

### install

- @assemblyscript/loader, assemblyscript 활용

```
yarn init
yarn add @assemblyscript/loader
yarn add assemblyscript -D
npx asinit .
```

### build

- yarn run asbuild

### test

```
yarn run test
```

# performance test

- [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)를 활용한 테스트
- 로컬 서버 구동 후 index.html 파일 확인

```
yarn run serve
http://localhost:3000
```

# Reference

- https://www.assemblyscript.org/
- https://developer.mozilla.org/ko/docs/WebAssembly
