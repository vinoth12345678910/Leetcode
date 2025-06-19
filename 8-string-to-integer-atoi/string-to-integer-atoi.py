class Solution(object):
    def myAtoi(self, s):
        s = s.lstrip()  # Step 1: Trim leading spaces
        if not s:
            return 0
        
        sign = 1
        index = 0
        
        # Step 2: Sign check
        if s[0] == '-':
            sign = -1
            index += 1
        elif s[0] == '+':
            index += 1
        
        num = 0
        # Step 3: Convert digits
        while index < len(s) and s[index].isdigit():
            num = num * 10 + int(s[index])
            index += 1
        
        num *= sign
        
        # Step 4: Clamp to 32-bit signed int range
        INT_MIN = -2**31
        INT_MAX = 2**31 - 1
        
        if num < INT_MIN:
            return INT_MIN
        if num > INT_MAX:
            return INT_MAX
        
        return num

        