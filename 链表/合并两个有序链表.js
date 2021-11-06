/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

const mergeTwoList = (list1, list2) => {
    const lHead = new ListNode(0);
    let lCur = lHead;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            lCur.next = list1;
            lCur = lCur.next;
            list1 = list1.next;
        } else {
            lCur.next = list2;
            lCur = lCur.next;
            list2 = list2.next;
        }
    }
    if (list1 === null) {
        lCur.next = list2;
    }
    if (list2 === null) {
        lCur.next = list1;
    }
    return lHead.next;
}