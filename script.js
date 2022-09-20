'use strict';

const INTERVAL_SEMITONES = {
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
const CHORDS = {
    'NOTE': ['ROOT'],
    '5': ['ROOT', 'PERFECT_5TH'],
    'MAJOR': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH'],
    'MINOR': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH'],
    'AUGMENTED': ['ROOT', 'MAJOR_3RD', 'AUGMENTED_5TH'],
    'DIMINISHED': ['ROOT', 'MINOR_3RD', 'DIMINISHED_5TH'],
    // 
    'DOMINANT 7TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH'],
    'DIMINISHED 7TH': ['ROOT', 'MINOR_3RD', 'DIMINISHED_5TH', 'DIMINISHED_7TH'],
    'HALF-DIMINISHED 7TH': ['ROOT', 'MINOR_3RD', 'DIMINISHED_5TH', 'MINOR_7TH'],
    'MINOR 7TH': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH', 'MINOR_7TH'],
    'MINOR MAJOR 7TH': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH', 'MAJOR_7TH'],
    'MAJOR 7TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_7TH'],
    'AUGMENTED 7TH': ['ROOT', 'MAJOR_3RD', 'AUGMENTED_5TH', 'MINOR_7TH'],
    'AUGMENTED MAJOR 7TH': ['ROOT', 'MAJOR_3RD', 'AUGMENTED_5TH', 'MAJOR_7TH'],
    // 
    'DOMINANT 7#9': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH', 'AUGMENTED_2ND'],
    // 
    'DOMINANT 9TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH', 'MAJOR_9TH'],
    'DOMINANT 11TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH', 'MAJOR_9TH', 'PERFECT_11TH'],
    'DOMINANT 13TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_7TH', 'MAJOR_9TH', 'PERFECT_11TH', 'MAJOR_13TH'],
    // 
    'ADD 9': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_9TH'],
    'ADD 4': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'PERFECT_4TH'],
    'ADD 6': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],
    '6/9': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH', 'MAJOR_9TH'],
    '7/6': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH', 'MINOR_7TH'],
    'MIXED 3RD': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MINOR_3RD'],
    // 
    'SUSPENDED 2ND': ['ROOT', 'MAJOR_2ND', 'PERFECT_5TH'],
    'SUSPENDED 4TH': ['ROOT', 'PERFECT_4TH', 'PERFECT_5TH'],
    'JAZZ SUS': ['ROOT', 'PERFECT_4TH', 'PERFECT_5TH', 'MINOR_7TH', 'MAJOR_9TH'],
    // 
    'MAJOR 7♯11': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_7TH', 'SHARP_11TH'],
    // 
    'MAJOR 6TH': ['ROOT', 'MAJOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],
    'MINOR MAJOR 6TH': ['ROOT', 'MINOR_3RD', 'PERFECT_5TH', 'MAJOR_6TH'],
};
const SCALES = {
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

const scaleAliases = {
    'SUSPENDED': ['EGYPTIAN'],
    'BLUES MINOR': ['MAN GONG'],
    'BLUES MAJOR': ['RITSUSEN', 'YO'],
    'MAJOR': ['IONIAN'],
    'MINOR': ['AEOLIAN'],
};

// TODO: verify relative modality shifts of scales:
// const heptatonic_order = ['IONIAN', 'DORIAN', 'PHRYGIAN', 'LYDIAN', 'MIXOLYDIAN', 'AEOLIAN', 'LOCRIAN',];


function mod(x, n) {
    return x - n * Math.floor(x / n);
}

function mod12(x) {
    return mod(x, 12);
}

const NOTE_LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const ALL_NOTES = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
const NATURAL_VALUES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
function noteValue(natural, accidental) {
    let value = NATURAL_VALUES[natural];
    for (const char of accidental) {
        if (char === '#') {
            value += 1;
        } else if (char === 'b') {
            value -= 1;
        }
    }
    return mod12(value);
}
function parseNoteString(noteString) {
    const regexResult = noteRegex.exec(noteString);
    const natural = regexResult[1];
    const accidental = regexResult[2];
    // const octaveNumber =  regexResult[3];
    return { natural, accidental };
}
function noteStringValue(noteString) {
    const parsed = parseNoteString(noteString);
    return noteValue(parsed.natural, parsed.accidental);
}
const noteRegex = /^([A-G])(#*|b*)((?:\+|-)?\d+)?$/;
function Note(natural, accidental = '') {
    this.natural = natural;
    this.accidental = accidental;
    this.value = noteValue(natural, accidental);
}
Note.prototype.toString = function () {
    return `${this.naturalName}${this.accidentals}`;
}
Note.prototype.equals = function (other) {
    return this.value === other.value;
}
Note.prototype.valueEquals = function (otherValue) {
    return this.value === mod12(otherValue);
}
Note.prototype.addInterval = function (intervalName) {
    return new IntervalNote(this, intervalName);
}
function IntervalNote(rootNote, intervalName) {
    const intervalDegree = getIntervalDegree(intervalName);
    const resultNatural = NOTE_LETTERS[
        mod(
            NOTE_LETTERS.findIndex(n => n === rootNote.natural) + intervalDegree - 1,
            NOTE_LETTERS.length
        )
    ];
    const resultValue = rootNote.value + INTERVAL_SEMITONES[intervalName];
    // Get the resultNatural (mod 12) closest to resultValue
    let resultNaturalValue = NATURAL_VALUES[resultNatural];
    let resultNaturalDistance = Math.abs(resultNaturalValue - resultValue);
    let nextResultNaturalValue, nextResultNaturalDistance;
    while (true) {
        nextResultNaturalValue = resultNaturalValue + 12;
        nextResultNaturalDistance = Math.abs(nextResultNaturalValue - resultValue);
        if (nextResultNaturalDistance > resultNaturalDistance) {
            break;
        }
        resultNaturalValue = nextResultNaturalValue;
        resultNaturalDistance = nextResultNaturalDistance;
    }
    let resultAccidental = '';
    if (resultNaturalValue < resultValue) {
        resultAccidental = '#'.repeat(resultValue - resultNaturalValue);
    } else if (resultNaturalValue > resultValue) {
        resultAccidental = 'b'.repeat(resultNaturalValue - resultValue);
    }
    console.log(
        'intervalDegree',intervalDegree, '\n',
        'resultNatural',resultNatural, '\n',
        'resultValue',resultValue, '\n',
        'resultNaturalValue',resultNaturalValue, '\n',
        'resultNaturalDistance',resultNaturalDistance, '\n',
        'resultAccidental',resultAccidental, '\n',
        );

    Note.call(this, resultNatural, resultAccidental);
    this.interval = intervalName;
    this.root = rootNote;

}
Object.setPrototypeOf(IntervalNote.prototype, Note.prototype);
Object.setPrototypeOf(IntervalNote, Note);

function noteFromString(noteString) {
    const parsed = parseNoteString(noteString);
    return new Note(parsed.natural, parsed.accidental);
};




module.exports = {
    shortenIntervalName,
    noteRegex,
    Note,
    SCALES,
};
