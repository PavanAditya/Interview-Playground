// LCS  - Print string length

function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i === 0 || j === 0) {
          dp[i][j] = 0;
        } else if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    return dp[m][n];
  }

// Test Case 1
const text1_1 = "abcde";
const text2_1 = "ace";
console.log(longestCommonSubsequence(text1_1, text2_1)); // Output: 3

// Test Case 2
const text1_2 = "abc";
const text2_2 = "def";
console.log(longestCommonSubsequence(text1_2, text2_2)); // Output: 0

// Test Case 3
const text1_3 = "bl";
const text2_3 = "yby";
console.log(longestCommonSubsequence(text1_3, text2_3)); // Output: 1

// Test Case 4 (Edge Case - Empty strings)
const text1_4 = "";
const text2_4 = "";
console.log(longestCommonSubsequence(text1_4, text2_4)); // Output: 0

// Test Case 5 (Edge Case - One empty string)
const text1_5 = "abcde";
const text2_5 = "";
console.log(longestCommonSubsequence(text1_5, text2_5)); // Output: 0

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LCS - Print string

function longestCommonSubsequenceString(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill("")); // Store strings

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = "";
      } else if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + text1[i - 1]; // Append matching char
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length? dp[i - 1][j]: dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
}

const str1_1 = "abcde";
const str2_1 = "ace";
console.log(longestCommonSubsequenceString(str1_1, str2_1)); // Output: "ace"

const str1_2 = "abc";
const str2_2 = "def";
console.log(longestCommonSubsequenceString(str1_2, str2_2)); // Output: ""

const str1_3 = "bl";
const str2_3 = "yby";
console.log(longestCommonSubsequenceString(str1_3, str2_3)); // Output: "b"

const str1_4 = "";
const str2_4 = "";
console.log(longestCommonSubsequenceString(str1_4, str2_4)); // Output: ""

const str1_5 = "abcde";
const str2_5 = "";
console.log(longestCommonSubsequenceString(str1_5, str2_5)); // Output: ""