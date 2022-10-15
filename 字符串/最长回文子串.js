const longestPalindrome = (s) => {
    if (s.length === 0) return '';
    let res = s[0];
    const dp = [];
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = [];
        for (let j = i; j < s.length; j++) {
            // case1: a
            if (j - i === 0) dp[i][j] = true;
            // case2: aa
            else if (j - i == 1 && s[j] === s[i]) dp[i][j] = true;
            // state transition
            else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true;

            // update res
            if (dp[i][j] && j - i + 1 > res.length) res = s.slice(i, j + 1);
        }
    }
    return res;
}