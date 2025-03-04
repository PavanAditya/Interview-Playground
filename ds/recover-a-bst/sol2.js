function recoverTreeMultipleSwapped(root) {
    if (!root) return;

    // 1. Inorder Traversal to get node values
    const inorderValues = [];
    const inorderNodes = [];

    function inorderTraversal(node) {
        if (!node) return;
        inorderTraversal(node.left);
        inorderValues.push(node.val);
        inorderNodes.push(node);
        inorderTraversal(node.right);
    }

    inorderTraversal(root);

    // 2. Sort the node values
    const sortedValues = [...inorderValues].sort((a, b) => a - b);

    // 3. Inorder Traversal again to compare and swap
    for (let i = 0; i < inorderNodes.length; i++) {
        if (inorderValues[i] !== sortedValues[i]) {
            inorderNodes[i].val = sortedValues[i];
        }
    }
}


// Explanation:

// 1. Inorder Traversal (First Pass):
// We perform a standard inorder traversal of the BST.
// We store both the node.val values in inorderValues and the actual node references in inorderNodes. This is crucial because we need to modify the original nodes, not just the values.

// 2. Sorting:
// We create a copy of inorderValues using the spread syntax (...inorderValues) and sort it using sort((a, b) => a - b). This gives us the correct, sorted order of the node values.

// 3. Inorder Traversal (Second Pass) and Swapping:
// We iterate through the inorderNodes array.
// For each node, we compare its val with the corresponding value in the sortedValues array.
// If the values are different, it means the node is out of place. We then set the node's val to the correct value from sortedValues.


// Time Complexity: O(n log n) due to the sorting step. The inorder traversals are O(n).
// Space Complexity: O(n) to store the inorderValues and inorderNodes arrays.