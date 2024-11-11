const decodeTheRing = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;

  // Initialize a 2D DP array with false values
  const dp = Array(sLen + 1)
    .fill(null)
    .map(() => Array(pLen + 1).fill(false));

  // Empty pattern matches an empty string
  dp[sLen][pLen] = true;

  // Fill the DP table from the end towards the beginning
  for (let i = sLen; i >= 0; i--) {
    for (let j = pLen - 1; j >= 0; j--) {
      const firstMatch = i < sLen && (p[j] === s[i] || p[j] === '?');

      if (p[j] === '*') {
        // '*' matches zero characters (dp[i][j+1]) or one/more characters (dp[i+1][j])
        dp[i][j] = dp[i][j + 1] || (i < sLen && dp[i + 1][j]);
      } else {

        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }
};

module.exports = decodeTheRing;
