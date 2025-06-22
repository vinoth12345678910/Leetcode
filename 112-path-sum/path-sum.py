class Solution(object):
    def hasPathSum(self, root, targetSum):
        if not root:
            return False
        
        # Check if it's a leaf node
        if not root.left and not root.right:
            return targetSum == root.val
        
        # Recursively check left and right subtrees
        return (self.hasPathSum(root.left, targetSum - root.val) or
                self.hasPathSum(root.right, targetSum - root.val))
