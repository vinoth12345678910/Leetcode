class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums = list(set(nums))  # Remove duplicates
        nums.sort(reverse=True)  # Sort in descending order
        
        if len(nums) >= 3:
            return nums[2]  # Return the third maximum
        else:
            return nums[0]  # Return the maximum if less than 3 distinct numbers

        