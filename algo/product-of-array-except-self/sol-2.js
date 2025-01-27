function productExceptSelfWithDivision(nums) {
    const n = nums.length;
    let product = 1;
    let zeroCount = 0;

    for (const num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            product *= num;
        }
    }

    const result = new Array(n);

    if (zeroCount > 1) {
        result.fill(0); // If more than one zero, all products are zero
        return result;
    }

    if (zeroCount === 1) {
        for (let i = 0; i < n; i++) {
            if (nums[i] === 0) {
                result[i] = product; // The only non-zero product
            } else {
                result[i] = 0;
            }
        }
        return result;
    }

    // No zeros
    for (let i = 0; i < n; i++) {
        result[i] = product / nums[i];
    }

    return result;
}

// Example usage (same as before):
const nums1 = [1, 2, 3, 4];
console.log(productExceptSelfWithDivision(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelfWithDivision(nums2)); // Output: [0, 0, 9, 0, 0]

const nums3 = [1, 0];
console.log(productExceptSelfWithDivision(nums3)); // Output: [0, 1]

const nums4 = [0, 0];
console.log(productExceptSelfWithDivision(nums4)); // Output: [0, 0]

const nums5 = [2,3];
console.log(productExceptSelfWithDivision(nums5)); // Output: [3,2]

const nums6 = [-1,1];
console.log(productExceptSelfWithDivision(nums6)); // Output: [1,-1]

// Solution Explanation:

// Calculate Total Product: Calculate the product of all non-zero elements in the array. Count the number of zeros.
// Handle Zero Cases:
// If there are more than one zero, the product except self for all elements will be zero.
// If there is exactly one zero, the product except self for that zero element will be the product of all other elements. All other elements will have a product of zero.
// No Zeros: If there are no zeros, iterate through the array, dividing the total product by each element to get the product except self.

// Complexities: 
// Time Complexity: O(n), as we iterate through the array a maximum of three times (in separate loops).
// Space Complexity: O(n) for the result array (as explained before, this is the space required to return the result).

// Important Considerations and Why This Approach is Generally Discouraged:

// Division by Zero: This approach requires explicit handling of zero cases to avoid division by zero errors. The code above handles this.
// Floating-Point Issues: If the numbers in the input array are very large or very small, using division can lead to floating-point precision issues. This can result in inaccurate results.
// Interview Setting: In most interview settings, the "product except self" problem is explicitly stated without using division. This is because the two-pass prefix/suffix product approach is a good way to test algorithmic thinking and dynamic programming concepts.