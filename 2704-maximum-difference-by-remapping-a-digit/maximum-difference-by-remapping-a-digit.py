class Solution(object):
    def minMaxDifference(self, num):
        s = str(num)
        max_num = num
        min_num = num
        
        # For maximum: replace the first non-9 digit with 9
        for d in s:
            if d != '9':
                max_candidate = int(s.replace(d, '9'))
                max_num = max(max_num, max_candidate)
                break  # only one replacement is allowed

        # For minimum: replace the first digit that is not 0 with 0
        for d in s:
            if d != '0':
                min_candidate = int(s.replace(d, '0'))
                min_num = min(min_num, min_candidate)
                break

        return max_num - min_num
