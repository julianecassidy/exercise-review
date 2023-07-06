def in_range(nums, lowest, highest):
    """Print numbers inside range.

    - nums: list of numbers
    - lowest: lowest number to print
    - highest: highest number to print

    For example:

      in_range([10, 20, 30, 40], 15, 30)

    should print:

      20 fits
      30 fits
    """

    # YOUR CODE HERE
    if lowest > nums[-1] or highest < nums[0] :
        return "no numbers inside range"
    
    start_idx = nums.index(lowest)
    end_idx = nums.index(highest)

    if start_idx == -1:
        start_idx = 0
    
    while start_idx < end_idx or start_idx < len(nums):
        print(f"nums{start_idx} fits")
        start_idx += 1



in_range([10, 20, 30, 40, 50], 15, 30)            
