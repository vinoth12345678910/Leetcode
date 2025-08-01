class Solution(object):
    def preorderTraversal(self, root):
        result = []
        
        def dfs(node):
            if node:
                result.append(node.val)  # Visit root
                dfs(node.left)           # Visit left
                dfs(node.right)          # Visit right
        
        dfs(root)
        return result

        