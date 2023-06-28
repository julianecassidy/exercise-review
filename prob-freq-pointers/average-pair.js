"use strict"; 

/** Takes an array of numbers and a number. Returns a boolean if there are two 
 * numbers in the array that average to the inputted number.
 */
function averagePair(nums, avg) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currAvg = (nums[left] + nums[right]) / 2;

        console.log("avg", avg, "currAvg", currAvg, "left, right", left, right);
    
        if (currAvg === avg) return true;
        
        if (currAvg > avg) {
            right --;
        } else {
            left ++;
        }
    }

    return false;
}

