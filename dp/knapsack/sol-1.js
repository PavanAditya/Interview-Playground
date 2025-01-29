function knapsack(W, wt, val, n) {
    const dp = Array(n + 1).fill(null).map(() => Array(W + 1).fill(0));
  
    for (let i = 0; i <= n; i++) {
      for (let w = 0; w <= W; w++) {
        if (i === 0 || w === 0) {
          dp[i][w] = 0;
        } else if (wt[i - 1] <= w) {
          dp[i][w] = Math.max(
            val[i - 1] + dp[i - 1][w - wt[i - 1]], // Include item
            dp[i - 1][w] // Exclude item
          );
        } else {
          dp[i][w] = dp[i - 1][w]; // Exclude item (item too heavy)
        }
      }
    }
  
    return dp[n][W];
  }

// Test Case 1
const W1 = 50;
const wt1 = [10, 20, 30];
const val1 = [60, 100, 120];
const n1 = wt1.length;
console.log(knapsack(W1, wt1, val1, n1)); // Output: 220

// Test Case 2
const W2 = 10;
const wt2 = [5, 4, 6, 3];
const val2 = [10, 40, 30, 50];
const n2 = wt2.length;
console.log(knapsack(W2, wt2, val2, n2)); // Output: 90

// Test Case 3 (Edge Case - Empty items)
const W3 = 50;
const wt3 = [];
const val3 = [];
const n3 = 0;
console.log(knapsack(W3, wt3, val3, n3)); // Output: 0

// Test Case 4 (Edge Case - Zero capacity)
const W4 = 0;
const wt4 = [10, 20, 30];
const val4 = [60, 100, 120];
const n4 = wt4.length;
console.log(knapsack(W4, wt4, val4, n4)); // Output: 0