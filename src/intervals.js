export const INTERVAL_SEMITONES = {
    ROOT: 0,
    MINOR_2ND: 1,
    MAJOR_2ND: 2,
    AUGMENTED_2ND: 3,
    MINOR_3RD: 3,
    MAJOR_3RD: 4,
    PERFECT_4TH: 5,
    AUGMENTED_4TH: 6,
    DIMINISHED_5TH: 6,
    PERFECT_5TH: 7,
    AUGMENTED_5TH: 8,
    MINOR_6TH: 8,
    MAJOR_6TH: 9,
    DIMINISHED_7TH: 9,
    MINOR_7TH: 10,
    MAJOR_7TH: 11,
    MAJOR_9TH: 14,
    PERFECT_11TH: 17,
    SHARP_11TH: 18,
    MAJOR_13TH: 21,
};

const intervalTypeShortNames = {
    MINOR: 'MIN',
    MAJOR: 'MAJ',
    AUGMENTED: 'AUG',
    PERFECT: 'P',
    DIMINISHED: 'DIM',
    SHARP: '#',
};

function shortenIntervalName(intervalName) {
    if (intervalName === 'ROOT') return 'R';
    const [type, order] = intervalName.split('_');
    const shortType = intervalTypeShortNames[type];
    const orderDigits = /\d+/.exec(order)[0];
    return shortType + ' ' + orderDigits;
}

function getIntervalDegree(intervalName) {
    if (intervalName === 'ROOT') return 1;
    const [_type, order] = intervalName.split('_');
    return Number(/\d+/.exec(order)[0]);
}
