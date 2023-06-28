"use strict"; 

/** Takes a word string and a string of letters. Returns a boolean if the word
 * can be built with those letters.
 */
function canConstructWord(word, letters) {
    const wordCharFreqs = getFrequencyCounter(word);
    const lettersFreqs = getFrequencyCounter(letters);

    // console.log(wordCharFreqs, lettersFreqs)

    for (let char in wordCharFreqs) {
      // console.log(char, wordCharFreqs[char], lettersFreqs[char]);
        if (lettersFreqs[char] === undefined || wordCharFreqs[char] > lettersFreqs[char]) {
          return false;
        } 
    }

    return true;
}

/** takes an array or string and returns an frequency counter object */
function getFrequencyCounter (items) {
   const freqs = {};

  for (const item of items) {
    const currValue = freqs[item] || 0;
    freqs[item] = currValue + 1;
  }

  return freqs;
}