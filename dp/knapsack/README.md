### 0/1 Knapsack Problem

#### Problem Statement:

You are given a knapsack with a maximum weight capacity W. You are also given a set of items, each with a weight wt[i] and a value val[i]. The goal is to choose items to put in the knapsack such that you maximize the total value of the items in the knapsack without exceeding the weight capacity W. You can either take an item or leave it (hence 0/1).

#### Example:
```
W = 50
wt = [10, 20, 30]
val = [60, 100, 120]
Output: 220 (Take items with weights 20 and 30)
```

#### Hints:

Create a 2D table dp where dp[i][j] represents the maximum value that can be obtained by considering items up to index i and a maximum weight capacity of j.
For each item, you have two choices: either include it in the knapsack or exclude it.