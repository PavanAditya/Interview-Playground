function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate numbers

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicate numbers
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Solution Explanation:

// Sort the array.
// Iterate through the array, fixing one number at a time (nums[i]).
// Use two pointers, left and right, to find the other two numbers that sum up to -nums[i].
// Handle duplicates to avoid duplicate triplets in the result.

// Time Complexity: O(n^2) - Nested loops.

// Space Complexity: O(n) in the worst case due to sorting (depending on the sorting algorithm used).