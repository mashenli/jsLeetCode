/**
 * 给定两个二叉树，编写一个函数来检验它们是否相同。 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * @param {*} tree1 
 * @param {*} tree2 
 */
const isSameTree = (tree1, tree2) => {
    if (tree1 === null && tree2 === null) return true;
    if (tree1 === null || tree2 === null) return false;
    if (tree1.val !== tree2.val) return false;
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}