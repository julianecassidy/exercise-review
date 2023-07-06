def find_the_duplicate(nums):
    """Find duplicate number in nums.

    Given a list of nums with, at most, one duplicate, return the duplicate.
    If there is no duplicate, return None

        >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
        1

        >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
        9

        >>> nums = [2, 1, 3, 4]
        >>> find_the_duplicate(nums) is None
        True

    Make sure original list has not been mutated:
    
        >>> nums == [2, 1, 3, 4]
        True
    """
