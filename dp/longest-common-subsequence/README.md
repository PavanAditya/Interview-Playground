### Longest Common Subsequence (LCS)

#### Problem Statement:
Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence of a string is a new string that is formed with some characters (can be none) of the original string deleted without disturbing the relative positions of the remaining characters. (For example, "ace" is a subsequence of "abcde" while "aec" is not). If there is no common subsequence, return 0.

#### Example:
```
text1 = "abcde", text2 = "ace" -> Output: 3 (LCS is "ace")
text1 = "abc", text2 = "def" -> Output: 0 (No common subsequence)
```

#### Hints:

Think about building a 2D table dp where dp[i][j] stores the length of the LCS of text1[0...i] and text2[0...j].
Consider the cases where the last characters of the substrings match or don't match.