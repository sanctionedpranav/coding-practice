function primeNumber(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(7)); // true
console.log(primeNumber(10)); // false
