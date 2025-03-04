function sortedArrayToBST(nums) {
    if (!nums || nums.length === 0) return null;

    function buildTree(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = { val: nums[mid] };

        node.left = buildTree(left, mid - 1);
        node.right = buildTree(mid + 1, right);

        return node;
    }

    return buildTree(0, nums.length - 1);
}

// Time Complexity: O(n), where n is the number of elements in nums.
// Space Complexity: O(log n) on average (for a balanced tree), O(n) in the worst case (for a skewed tree), due to the recursion stack.