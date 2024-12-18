import { noteFromString, noteFromValue } from './notes';

export const TUNINGS_6 = {
    'STANDARD': ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    'OPEN E': ['E2', 'B2', 'E3', 'G#3', 'B3', 'E4'],
    'OPEN D': ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'],
    'OPEN A': ['E2', 'A2', 'E3', 'A3', 'C#4', 'E4'],
    'OPEN G': ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'],
    'OPEN G LOW E': ['E2', 'G2', 'D3', 'G3', 'B3', 'D4'],
    'G6': ['D2', 'G2', 'D3', 'G3', 'B3', 'E4'],
    'DADGAD': ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'],
    'DROP D': ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    'DOUBLE DROP D': ['D2', 'A2', 'D3', 'G3', 'B3', 'D4'],
};

const TUNINGS = TUNINGS_6;

export const DEFAULT_TUNING = 'STANDARD';

export default TUNINGS;


export function Tuning(tuningName) {
    const noteNames = TUNINGS[tuningName];
    if (!noteNames) {
        throw Error(`No tuning "${tuningName}"`);
    }
    this.name = tuningName;
    this.notes = noteNames.map(n => noteFromString(n));
}
Tuning.prototype.getNote = function (stringIndex, fretNumber) {
    return noteFromValue(this.notes[stringIndex].getValue() + fretNumber);
}

// # TODO: Check:
// tuning_frettings = {
//     'STANDARD': (0, 0, 0, 0, 0, 0),
//     'OPEN E': (0, 2, 2, 1, 0, 0),
//     'OPEN D': (-2, 0, 0, -1, -2, -2),
//     'OPEN A': (0, 0, 2, 2, 2, 0),
//     'OPEN G': (-2, -2, 0, 0, 0, -2),
//     'OPEN G LOW E': (0, -2, 0, 0, 0, -2),
//     'G6': (-2, -2, 0, 0, 0, 0),
//     'DADGAD': (-2, 0, 0, 0, -2, -2),
//     'DROP D': (-2, 0, 0, 0, 0, 0),
//     'DOUBLE DROP D': (-2, 0, 0, 0, 0, -2),
// }
