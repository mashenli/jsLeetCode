/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。 
 * 本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 */

const isBlancedTree = (root) => {
    if (!root) return;
    if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false;
    return isBlancedTree(root.left) && isBlancedTree(root.right);
}

const depth = (node) => {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    return Math.max(left, right) + 1;
}