function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
console.log(findLargestNumber([18, 26, 15, 44, 50]));
