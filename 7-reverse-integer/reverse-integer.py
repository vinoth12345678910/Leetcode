class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        sign = -1 if x < 0 else 1
        x_abs = abs(x)
        reversed_x = int(str(x_abs)[::-1]) * sign

        if -2**31 <= reversed_x <= 2**31 - 1:
            return reversed_x
        else:
            return 0
