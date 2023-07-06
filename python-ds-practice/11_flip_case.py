def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    newString = ""

    for letter in phrase:
        if letter.lower() == to_swap.lower():
            if letter == to_swap.lower():
                newString += letter.upper()
            else:
                newString += letter.lower()
        else:
            newString += letter

    return newString