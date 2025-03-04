### Recover a BST

You are given the root of a binary search tree (BST), where exactly two nodes(Sol 1) or multiple nodes (Sol 2) of the tree were swapped by mistake.
Recover the tree without changing its structure.

#### Sample Input/Output For Two Swapped Nodes:

Sample Input 1: root = [1,3,null,null,2]
Sample Output 1: [3,1,null,null,2]

Sample Input 2: root = [3,1,4,null,null,2]
Sample Output 2: [2,1,4,null,null,3]


#### Sample Input/Output For Multiple Swapped Nodes:


Sample Input 1: root = [1, 5, 3, null, null, 2, 4]
Sample Output 1: [1, 2, 3, null, null, 4, 5]

Sample Input 2: root = [10, 5, 15, 2, 8, 12, 18, 1, 3, 7, 9, 11, 13, 17, 19] (Multiple swaps)
Sample Output 2: (The corrected tree, where nodes are in proper BST order)

Sample Input 3: root = []
Sample Output 3: []