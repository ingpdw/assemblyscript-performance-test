declare function log(data: i32): void;

export function add(a: i32, b: i32): i32 {
  log(a);
  log(b);
  return a + b;
}

export function fibonacci(n: i32): i32 {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
