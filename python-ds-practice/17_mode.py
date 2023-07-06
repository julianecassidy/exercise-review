def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of items.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    freqs = {}
    
    for num in nums:
        freqs[num] = freqs.get(num, 0) + 1

    max = 0
    max_key = None

    for num in freqs:
        if freqs[num] > max:
            max = freqs[num]
            max_key = num
        
    return max_key

