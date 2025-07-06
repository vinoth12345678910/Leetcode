class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left = 0
        right = len(height) - 1
        max_area = 0
        
        while left < right:
            # Calculate the area between the two lines
            width = right - left
            area = min(height[left], height[right]) * width
            max_area = max(max_area, area)
            
            # Move the pointer that has the smaller height
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
                
        return max_area

        