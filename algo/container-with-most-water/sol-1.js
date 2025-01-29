function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Solution Explanation:

// Use two pointers, left and right, starting at the beginning and end of the height array.
// Calculate the area formed by the two pointers. The area is determined by the shorter height multiplied by the distance between the pointers.
// Move the pointer that points to the shorter height inward. The idea is to try to find a taller "wall" to potentially increase the area.
// Repeat until the two pointers meet.

// Time Complexity: O(n) - Single pass through the array.

// Space Complexity: O(1) - Constant extra space.