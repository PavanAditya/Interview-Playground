function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
}


// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (where bars are represented by '#' ) depicts 6 units of rain water (blue section) being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Example 3 (Edge Case - Empty or single element):

// Input: height = [] or height = [5]
// Output: 0


// Solution Explanation:

// Use two pointers, left and right, starting at the beginning and end of the height array.
// Keep track of the maximum height seen so far from the left (leftMax) and from the right (rightMax).
// At each step, if height[left] < height[right], check if the current height can hold any water. If it can, add the trapped water to the trappedWater variable.
// Move the pointer that points to the smaller height inward.
// Repeat until the two pointers meet.

// Time Complexity: O(n) - Single pass through the array.

// Space Complexity: O(1) - Constant extra space.