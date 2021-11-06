/**
 * 编写一个程序，找到两个单链表相交的起始节点。 例如
    思路： 遍历 A 表，指针 l1 等于尾部 c3 时，让它指向 B 表的 b1 遍历 B 表，指针 l2 等于尾部 c3 时，让它指向 A 表的 a1 如果两链表有交点，则会同时指向 c1
    因为： a1 → a2 → c1 → c2 → c3 → b1 → b2 → b3 → c1 与 b1 → b2 → b3 → c1 → c2 → c3 → a1 → a2 → c1 相等。
 */

const getNode = (headA, headB) => {
    if (!headA || !headB) return null;
    if (headA == headB) return headA;
    let l1 = headA;
    let l2 = headB;
    let count = 0;
    while (l1 !== l2 && count < 3) {
        if (!l1.next || !l2.next) count++;
        l1 = l1.next ? li.next : headB;
        l2 = l2.next ? l2.next : headA;
    }
    return l1 == l2 ? l1 : null;
}