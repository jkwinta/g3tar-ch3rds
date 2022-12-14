export const SCALES = {
    // pentatonic scales
    'MINOR PENTATONIC': [
        'ROOT', 'MINOR_3RD', 'PERFECT_4TH', 'PERFECT_5TH', 'MINOR_7TH'],
    'MAJOR PENTATONIC': [
        'ROOT', 'MAJOR_2ND', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],
    'SUSPENDED': [
        'ROOT', 'MAJOR_2ND', 'PERFECT_4TH', 'PERFECT_5TH', 'MINOR_7TH'],
    'BLUES MINOR': [
        'ROOT', 'MINOR_3RD', 'PERFECT_4TH', 'MINOR_6TH', 'MINOR_7TH'],
    'BLUES MAJOR': [
        'ROOT', 'MAJOR_2ND', 'PERFECT_4TH', 'PERFECT_5TH', 'MAJOR_6TH'],

    // heptatonic scales
    'MAJOR': ['ROOT', 'MAJOR_2ND', 'MAJOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MAJOR_7TH'],
    'MINOR': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MINOR_6TH', 'MINOR_7TH'],
    'HARMONIC MINOR': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MINOR_6TH', 'MAJOR_7TH'],
    'MELODIC MINOR': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MAJOR_7TH'],
    // heptatonic modes
    'LYDIAN': ['ROOT', 'MAJOR_2ND', 'MAJOR_3RD', 'AUGMENTED_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MAJOR_7TH'],
    'MIXOLYDIAN': ['ROOT', 'MAJOR_2ND', 'MAJOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MINOR_7TH'],
    'DORIAN': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MINOR_7TH'],
    'PHRYGIAN': ['ROOT', 'MINOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MINOR_6TH', 'MINOR_7TH'],
    'LOCRIAN': ['ROOT', 'MINOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'DIMINISHED_5TH', 'MINOR_6TH', 'MINOR_7TH'],

    'FREYGISH': ['ROOT', 'MINOR_2ND', 'MAJOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MINOR_6TH', 'MINOR_7TH'],
    'ALTERED DORIAN': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'AUGMENTED_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MINOR_7TH'],

    // octatonic scales
    'WHOLE-HALF DIMINISHED': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD',
        'PERFECT_4TH', 'AUGMENTED_4TH', 'AUGMENTED_5TH',
        'MAJOR_6TH', 'MAJOR_7TH'],
    'HALF-WHOLE DIMINISHED': ['ROOT', 'MINOR_2ND', 'MINOR_3RD', 'MAJOR_3RD',
        'AUGMENTED_4TH', 'PERFECT_5TH',
        'MAJOR_6TH', 'MINOR_7TH'],
    // bebop (add modes?)
    'BEBOP DOMINANT': ['ROOT', 'MAJOR_2ND', 'MAJOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'MAJOR_6TH', 'MINOR_7TH', 'MAJOR_7TH'],
    'BEBOP MAJOR': ['ROOT', 'MAJOR_2ND', 'MAJOR_3RD', 'PERFECT_4TH',
        'PERFECT_5TH', 'AUGMENTED_5TH', 'MAJOR_6TH', 'MAJOR_7TH'],

    // Blues scales
    'BLUES HEXATONIC': ['ROOT', 'MINOR_3RD', 'PERFECT_4TH', 'DIMINISHED_5TH',
        'PERFECT_5TH', 'MINOR_7TH'],
    'BLUES HEPTATONIC': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'PERFECT_4TH',
        'DIMINISHED_5TH', 'MAJOR_6TH', 'MINOR_7TH'],
    'BLUES NONATONIC': ['ROOT', 'MAJOR_2ND', 'MINOR_3RD', 'MAJOR_3RD',
        'PERFECT_4TH', 'PERFECT_5TH',
        'MAJOR_6TH', 'MINOR_7TH', 'MAJOR_7TH'],

};

export const scale_aliases = {
    'SUSPENDED': ['EGYPTIAN'],
    'BLUES MINOR': ['MAN GONG'],
    'BLUES MAJOR': ['RITSUSEN', 'YO'],
    'MAJOR': ['IONIAN'],
    'MINOR': ['AEOLIAN'],
};

// TODO: verify relative modality shifts of scales:
// const heptatonic_order : string[] = ['IONIAN', 'DORIAN', 'PHRYGIAN', 'LYDIAN', 'MIXOLYDIAN', 'AEOLIAN', 'LOCRIAN',];
