class Solution(object):
    def maxPathSum(self, root):
        self.max_sum = float('-inf')

        def dfs(node):
            if not node:
                return 0
            # Recursively get the max path sum of left and right subtrees
            left = max(dfs(node.left), 0)  # ignore paths with negative sums
            right = max(dfs(node.right), 0)

            # Current max path using the current node as root
            current_max = node.val + left + right

            # Update global max if current path is greater
            self.max_sum = max(self.max_sum, current_max)

            # Return the max path sum including this node and one of its children
            return node.val + max(left, right)

        dfs(root)
        return self.max_sum

        