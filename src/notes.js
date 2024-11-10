function mod(x, n) {
    return x - n * Math.floor(x / n);
}

function mod12(x) {
    return mod(x, 12);
}

export const NOTE_LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const ALL_NOTES = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
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
Note.prototype.getValue = function () {
    return this.value;
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
    Note.call(this, resultNatural, resultAccidental);
    this.interval = intervalName;
    this.root = rootNote;
}
Object.setPrototypeOf(IntervalNote.prototype, Note.prototype);
// Object.setPrototypeOf(IntervalNote, Note);  // What about this one?

export function noteFromString(noteString) {
    const parsed = parseNoteString(noteString);
    return new Note(parsed.natural, parsed.accidental);
};

export const ALL_NOTES_VALUES = Object.fromEntries(ALL_NOTES.map(n => [n, noteStringValue(n)]));

export function noteFromValue(value) {
    return Object.entries(ALL_NOTES_VALUES).find(e => e[1] === mod12(value))[0];
}
