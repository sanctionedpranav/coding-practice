function palindromeString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }

  if (reversedString === string) {
    return {
      reversedString: reversedString,
      result: 'The string is a palindrome'
    }
  } else {
    return {
      reversedString: reversedString,
      result: 'The string is not a palindrome'
    }
  }
}

console.log(palindromeString("racecar"));
