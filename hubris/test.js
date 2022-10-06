'use strict';
const assert = require('node:assert').strict;
// const assert = require('node:assert/strict');
// assert.deepEqual()
// assert.equal()
// assert.notDeepEqual()
// assert.notEqual()

// assert.equal(1, 2);
// assert.deepEqual([1], [1]);

const shortenIntervalName = require('./script').shortenIntervalName;
const shortenIntervalNameTests = [
    ['ROOT', 'R'],
    ['MINOR_1ST', 'MIN 1'],
    ['MAJOR_2ND', 'MAJ 2'],
    ['AUGMENTED_33RD', 'AUG 33'],
    ['PERFECT_444TH', 'P 444'],
    ['DIMINISHED_00TH', 'DIM 00'],
    ['SHARP_1X', '# 1'],
];
for (const test of shortenIntervalNameTests) {
    assert.equal(shortenIntervalName(test[0]), test[1]);
}

const noteRegex = require('./script').noteRegex;
const noteRegexTests = [
    ['C'],
    ['D#'],
    ['Ebb'],
    ['F11'],
    ['G-100'],
    ['something else entirely']
];
for (const test of noteRegexTests) {
    const result = noteRegex.exec(test[0])
    console.log(test[0], (result || []).slice(1, 4));
}

const {Note, SCALES} = require('./script');
const noteC = new Note('C'); 
console.log(noteC);
console.log(noteC.addInterval('ROOT'));
console.log(noteC.addInterval('MINOR_2ND'));
console.log(noteC.addInterval('MAJOR_2ND'));


console.log('All tests pass!');
