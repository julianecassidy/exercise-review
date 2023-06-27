"use strict"; 

function pairSum(nums) { // O(n^2)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] > sum) {
                sum = nums[i] + nums[j];
            }
        }
    }
    return sum;
}

function pairSum(nums) { // O(n log n)
    nums = nums.sort((a, b) => a - b);

    return nums[nums.length - 1] + nums[nums.length - 2];

}

function pairSum(nums) { // O(n)

}

pairSum([4, 8, 5, 9, 1]); // 17
pairSum([10, 1, 4, 2, 1]); // 14