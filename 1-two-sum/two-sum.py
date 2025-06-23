class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        lookup = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in lookup:
                return [lookup[complement], i]
            lookup[num] = i
