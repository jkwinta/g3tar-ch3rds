export const CHORDS = {
    'NOTE': ['ROOT'],
    '5': ['ROOT', 'PERFECT_5TH'],
    'MAJOR': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH'],
    'MINOR': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH'],
    'AUGMENTED': ['ROOT', 'MAJOR_3RD', 'AUGMENTED_5TH'],
    'DIMINISHED': ['ROOT', 'MINOR_3RD', 'DIMINISHED_5TH'],

    'DOMINANT 7TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH'],
    'DIMINISHED 7TH': ['ROOT', 'MINOR_3RD', 'DIMINISHED_5TH', 'DIMINISHED_7TH'],
    'HALF-DIMINISHED 7TH': ['ROOT', 'MINOR_3RD', 'DIMINISHED_5TH', 'MINOR_7TH'],
    'MINOR 7TH': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH', 'MINOR_7TH'],
    'MINOR MAJOR 7TH': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH', 'MAJOR_7TH'],
    'MAJOR 7TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_7TH'],
    'AUGMENTED 7TH': ['ROOT', 'MAJOR_3RD', 'AUGMENTED_5TH', 'MINOR_7TH'],
    'AUGMENTED MAJOR 7TH': ['ROOT', 'MAJOR_3RD', 'AUGMENTED_5TH', 'MAJOR_7TH'],

    'DOMINANT 7#9': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH',
        'AUGMENTED_2ND'],

    'DOMINANT 9TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH',
        'MAJOR_9TH'],
    'DOMINANT 11TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH',
        'MAJOR_9TH', 'PERFECT_11TH'],
    'DOMINANT 13TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH',
        'MAJOR_9TH', 'PERFECT_11TH', 'MAJOR_13TH'],

    'ADD 9': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_9TH'],
    'ADD 4': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'PERFECT_4TH'],
    'ADD 6': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],
    '6/9': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH', 'MAJOR_9TH'],
    '7/6': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH', 'MINOR_7TH'],
    'MIXED 3RD': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_3RD'],

    'SUSPENDED 2ND': ['ROOT', 'MAJOR_2ND', 'PERFECT_5TH'],
    'SUSPENDED 4TH': ['ROOT', 'PERFECT_4TH', 'PERFECT_5TH'],
    'JAZZ SUS': ['ROOT', 'PERFECT_4TH', 'PERFECT_5TH', 'MINOR_7TH',
        'MAJOR_9TH'],

    'MAJOR 7♯11': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_7TH',
        'SHARP_11TH'],

    'MAJOR 6TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],
    'MINOR MAJOR 6TH': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],

    // '': [],
};
