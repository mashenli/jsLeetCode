/**
 * 删除排序链表中的重复元素
 */

const deleteDuplitcates = (head) => {
    if (!head) return;
    let l = head;
    while (l.next) {
        if (l.val === l.next.val) {
            l.val = l.next.next;
        } else {
            l = l.next;
        }
    }
    return head;
}