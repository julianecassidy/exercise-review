"use strict"; 

/** Takes an array of keys and array of values and returns an object of matched
 * keys and values matched based on arary index. Extra keys will have a value of
 * null. Extra values will be ignored.
 */
function twoArrayObject(keys, values) {
    const matched = {};
    for (let i = 0; i < keys.length; i++) {
        matched[keys[i]] = values[i] ? values[i] : null;
    }

    return matched;
}
