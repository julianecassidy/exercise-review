"use strict"; 

/** Takes two positive integers. Returns a boolean if they have the same freqency
 * of digits.
 */
function sameFrequency(n1, n2) {
    const n1Freq = getFrequencyCounter(n1.toString());
    const n2Freq = getFrequencyCounter(n2.toString());

    if (Object.keys(n1Freq).length !== Object.keys(n2Freq).length) return false;

    for (let item in n1Freq) {
        if (n1Freq[item] !== n2Freq[item]) return false;
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
