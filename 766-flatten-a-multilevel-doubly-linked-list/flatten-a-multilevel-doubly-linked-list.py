"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution(object):
    def flatten(self, head):
        """
        :type head: Node
        :rtype: Node
        """
        if not head:
            return None
        
        stack = []
        current = head
        
        while current:
            if current.child:
                if current.next:
                    stack.append(current.next)  # Save the next node
                
                current.next = current.child  # Link child as next
                current.next.prev = current
                current.child = None  # Remove child pointer
            
            if not current.next and stack:
                next_node = stack.pop()  # Retrieve saved next node
                current.next = next_node
                next_node.prev = current
            
            current = current.next  # Move to the next node
        
        return head

        