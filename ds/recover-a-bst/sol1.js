function recoverTree(root) {
    let first, second, prev;

    function inorder(node) {
        if (!node) return;
        inorder(node.left);

        if (prev && prev.val > node.val) {
            if (!first) {
                first = prev;
            }
            second = node;
        }
        prev = node;
        inorder(node.right);
    }

    first = second = prev = null;
    inorder(root);

    let temp = first.val;
    first.val = second.val;
    second.val = temp;
}

// Time Complexity: O(n)
// Space Complexity: O(h) (height of the tree, due to recursion stack)