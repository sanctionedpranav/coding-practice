function characterCount(str) {
  const count = {};

  for (let char of str) {
    if (char === ' ') continue;

    if (count[char]) {
      count[char]++
    } else {
      count[char] = 1;
    }
  }

  for (let char in count) {
    console.log(`Character: ${char}, Count: ${count[char]}`);
  }
}

characterCount("Pranav Sharma");