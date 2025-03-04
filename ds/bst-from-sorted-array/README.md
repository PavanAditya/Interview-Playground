### Convert Sorted Array to Balanced BST

Given a sorted array of unique integers nums, construct a height-balanced binary search tree (BST) from it.

#### Example 1:
* Input: nums = [-10, -3, 0, 5, 9]
* Output: [0, -3, 9, -10, null, 5]
* Explanation: One possible solution is:

```
              0
            /    \
          -3      9
          /      /
        -10     5
```

#### Example 2:
* Input: nums = [1, 3]
* Output: [3, 1] or [1, null, 3]
* Explanation:
    
    * Possible solution 1:

    ```
				    3
			       /
			     1
    ```
    
    * Possible solution 2:
    
    ```
				    1
			          \
			           3
    ```
