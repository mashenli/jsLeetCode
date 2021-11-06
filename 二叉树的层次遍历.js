/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * @param {treeNode} root 
 */
const levelOrderBottom = (root) => {
    const queue = [];
    const result = [];
    if (root) queue.push(root);
    while (queue.length) {
        const arr = [];
        for (let i = 0; i < queue.length; i++) {
            const curNode = queue.shift();
            arr.push(curNode.val);
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
        result.unshift(arr);
    }
    return result;
}