function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);

    // Calculate prefix products
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Calculate suffix products and multiply with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}

// Example usage:
const nums1 = [1, 2, 3, 4];
console.log(productExceptSelf(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]

const nums3 = [1, 0];
console.log(productExceptSelf(nums3)); // Output: [0, 1]

const nums4 = [0, 0];
console.log(productExceptSelf(nums4)); // Output: [0, 0]

const nums5 = [2,3];
console.log(productExceptSelf(nums5)); // Output: [3,2]

const nums6 = [-1,1];
console.log(productExceptSelf(nums6)); // Output: [1,-1]

// Solution Explanation:
// The key idea is to calculate the product of all elements to the left of each element and the product of all elements to the right of each element. The 1  product except self is then the product of these two values.   

// Prefix Products: We first calculate the prefix products and store them in the result array. result[i] stores the product of all elements from nums[0] to nums[i-1].
// Suffix Products: Then, we iterate from right to left, calculating the suffix products. suffixProduct stores the product of all elements from nums[i+1] to nums[n-1].
// Final Calculation: In the same right-to-left loop, we multiply result[i] (the prefix product) by suffixProduct to get the final result.


// Time Complexity: O(n), as we iterate through the array twice.
// Space Complexity: O(n) because we use the result array to store the output. Note that the output array does not count towards extra space for the purpose of space complexity analysis. If we were not allowed to use the output array, and had to return the result in place, then the space complexity would be O(1)