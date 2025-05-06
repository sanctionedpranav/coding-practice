function RemoveDuplicate(arr) {
  let uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i])
    }
  }

  return uniqueElements
}

console.log(RemoveDuplicate([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
