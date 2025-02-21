/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);  // Dummy node for easy result construction
    let curr = dummy;  // Pointer to traverse the result list
    let carry = 0;  // Carry for summation

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;  // Start with carry
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);  // Extract carry
        curr.next = new ListNode(sum % 10);  // Store last digit as new node
        curr = curr.next;
    }

    return dummy.next;  // Return head of the new linked list
};
