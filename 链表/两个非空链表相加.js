/**
 * 
给你两个 非空 的链表，表示两个非负的整数。
它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

/**
 * 
首先创建一个哑节点dummy，通过cur指针指向该哑节点，那么之后该cur指针的操作可用dummy.next来表示最终的链表结果
接着当任意一个链表不为空的情况下，对这两个链表当前节点的值进行相加，
由于要注意到数值相加到10就要进一位的情况，
所以要加个变量carry来取整除数和余数来辅助判断cur指向的下一个节点的值应该是多少
 */

const toSum = (l1, l2) => {
    let dummy = new ListNode(null),
        cur = dummy,
        carry = 0;
    while (l1 != null || l2 != null) {
        const l1Val = (l1 != null) ? l1.val : 0;
        const l2Val = (l2 != null) ? l2.val : 0;
        const sumVal = carry + l1Val + l2Val;
        //取整除数，不仅消除要超过10以上的数值影响，还可以判断是否要进一位到sumVal
        carry = Math.floor(sumVal / 10);
        //取余数作为链表的下一个节点
        cur.next = new ListNode(sumVal % 10);
        //cur向右移动
        cur = cur.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        //如果最后溢出1的话，就添加为1的节点即可。
        if (carry > 0) {
            cur.next = new ListNode(carry);
        }
    }
    return dummy.next;
}

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
console.log(toSum(l1, l2));