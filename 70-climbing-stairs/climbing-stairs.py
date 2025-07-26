class Solution:
    def climbStairs(self, n):
        if n == 1:
            return 1
        if n == 2:
            return 2

        xp1 = 1  # ways to reach step 1
        xp2 = 2  # ways to reach step 2

        for level in range(3, n + 1):
            xp_now = xp1 + xp2
            xp1 = xp2
            xp2 = xp_now

        return xp2

