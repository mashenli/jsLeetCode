/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

const isSymmetric = (root) => {
    if (!root) return true;
    const leftAndRight = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return leftAndRight(left.left, right.right) && leftAndRight(left.right, right.left);
    }
    leftAndRight(root.left, root.right);
}