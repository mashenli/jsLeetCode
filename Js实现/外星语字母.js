/**
某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
给定一组用外星语书写的单词 words，以及其字母表的顺序 order，
只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。
​
示例 1：
输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
输出：true
解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
​
示例 2：
输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
输出：false
解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
​
提示：
1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
在 words[i] 和 order 中的所有字符都是英文小写字母。
 */

function isAlienSorted(words, order) {
    let map = {}
    order.split('').forEach((o, i) => map[o] = i)
    map['*'] = -1
    for (let i = 1; i < words.length; i++) {
        let lf = words[i - 1]
        let rt = words[i]
        let l = Math.max(lf.length, rt.length)
        for (let j = 0; j < l; j++) {
            let p = lf[j] || '*'
            let c = rt[j] || '*'
            if (map[p] < map[c]) break
            if (map[p] > map[c]) return false
        }
    }
    return true
};