function fib(n) {
    if (n <= 1) {
        return n;
    }
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Solution Explanation:
// Similar to Climbing Stairs, this is a fundamental DP problem.  We build up the Fibonacci sequence from the base cases F(0) and F(1) using the recurrence relation.

// Time Complexity: O(n)
// Space Complexity: O(n) (can be optimized to O(1) by storing only the last two values)