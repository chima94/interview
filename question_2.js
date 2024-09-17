function fib(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    const sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
      const s = fib(i - 1) + fib(i - 2);
      sequence.push(s);
    }
  }

  return fib(n);
}

console.log(fib(5));
