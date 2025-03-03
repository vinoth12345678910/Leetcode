class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        # Initial window sum of the first 'k' elements
        window_sum = sum(nums[:k])
        max_sum = window_sum

        # Sliding window to find maximum sum of any subarray of length 'k'
        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)

        # Return maximum average
        return float(max_sum) / k
