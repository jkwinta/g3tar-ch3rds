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


console.log('All tests pass!');
