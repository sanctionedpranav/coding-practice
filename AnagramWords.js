function AnagramWords(word1, word2) {
  const sortedWord1 = word1.toLowerCase().split('').sort().join('');
  const sortedWord2 = word2.toLowerCase().split('').sort().join('');

  return sortedWord1 === sortedWord2;
}

console.log(AnagramWords('listen', 'silent'));
