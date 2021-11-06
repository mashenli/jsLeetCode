/*
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。 说明: 叶子节点是指没有子节点的节点。
*/

const hasPathSum = (root, sum) => {
    if (!root) return false;
    let cur = sum - root.value;
    if (!root.left && !root.right && cur === 0) return true;
    if (!root.left) return hasPathSum(root.right, cur);
    if (!root.right) return hasPathSum(root.left, cur);
    return hasPathSum(root.left, cur) || hasPathSum(root.right, cur);
}