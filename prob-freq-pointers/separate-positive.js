"use strict"; 

/** Takes an array of positive and negative numbers. Returns the same array with
 * positive numbers on the left and negative numbers on the right.
 */
function separatePositive(nums) {
    for (let i = nums.length; i > 0; i--) {
        console.log(nums);
        if (nums[i] < 0) {
            const removed = nums.splice(i, 1);
            nums.push(removed[0]);
        }
    }

    return nums;
}
