class Solution(object):
    def isSameTree(self, p, q):
        # Both nodes are None
        if not p and not q:
            return True
        # One node is None, the other is not
        if not p or not q:
            return False
        # Values are different
        if p.val != q.val:
            return False
        # Recursively check left and right subtrees
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
