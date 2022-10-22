/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

// 我们可以如下递归地定义两个链表里的 merge 操作（ 忽略边界情况， 比如空链表等
// 也就是说， 两个链表头部值较小的一个节点与剩下元素的 merge 操作结果合并。

// 我们直接将以上递归过程建模， 同时需要考虑边界情况。
// 如果 l1 或者 l2 一开始就是空链表， 那么没有任何操作需要合并， 所以我们只需要返回非空链表。 否则， 我们要判断 l1 和 l2 哪一个链表的头节点的值更小， 然后递归地决定下一个添加到结果里的节点。 如果两个链表有一个为空， 递归结束。

const mergeTwoList = (list1, list2) => {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}