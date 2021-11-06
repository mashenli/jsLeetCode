/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */
const sortArrToTree = (nums) => {
    if (!nums.length) return;
    if (nums.length === 1) return new TreeNode(nums[0]);
    const middle = parseInt(nums.length / 2);
    const root = new TreeNode(nums[middle]);
    root.left = sortArrToTree(nums.slice(0, middle));
    root.right = sortArrToTree(nums.slice(middle + 1));
    return root;
}