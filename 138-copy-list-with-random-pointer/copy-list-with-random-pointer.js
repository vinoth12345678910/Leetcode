/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

var copyRandomList = function(head) {
    if (!head) return null;

    // Step 1: Interleave copied nodes
    let curr = head;
    while (curr) {
        let copy = new Node(curr.val, curr.next);
        curr.next = copy;
        curr = copy.next;
    }

    // Step 2: Assign random pointers
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // Step 3: Separate copied list from original
    let dummy = new Node(0);
    let copyCurr = dummy;
    curr = head;
    while (curr) {
        copyCurr.next = curr.next;
        copyCurr = copyCurr.next;
        curr.next = copyCurr.next;  // Restore original list
        curr = curr.next;
    }

    return dummy.next;
};
