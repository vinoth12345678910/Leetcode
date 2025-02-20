/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Merge Sort implementation
var sortList = function(head) {
    if (!head || !head.next) return head; // Base case: empty or single-node list

    // Step 1: Find the middle of the list using slow & fast pointers
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null; // Split the list

    // Step 2: Recursively sort both halves
    let left = sortList(head);
    let right = sortList(mid);

    // Step 3: Merge the sorted halves
    return merge(left, right);
};

// Helper function to merge two sorted lists
var merge = function(l1, l2) {
    let dummy = new ListNode(0); // Dummy node to simplify merging
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    // Attach any remaining nodes
    tail.next = l1 || l2;

    return dummy.next; // Return merged sorted list
};
