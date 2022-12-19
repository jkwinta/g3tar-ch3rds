import { ALL_NOTES, NOTE_LETTERS } from './notes.js';
import { SCALES } from './note_collections/scales.js';
import { CHORDS } from './note_collections/chords.js';
import { titleCase } from './util.js';

function radioButtonWithLabel(group, value, labelTransformation = x => x) {
    // TODO: jbk: probably don't id, use heirarchy to root of querySelector
    // `
    // <div>
    // <input type="radio" id="dewey" name="drone" value="dewey">
    // <label for="dewey">Dewey</label>
    // </div>
    // `
    const id = group + '@' + value;
    const result = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = id;
    input.name = group;
    input.value = value;
    result.appendChild(input);
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = labelTransformation(value);
    result.appendChild(label);
    return result;
}

// Get the selected thing:
// document.querySelector('input[type=radio][name=rootPicker]:checked')

function buildRootTable() {
    const result = document.createElement('table');
    const body = document.createElement('tbody');
    result.appendChild(body);
    for (const rootLetter of NOTE_LETTERS) {
        const row = document.createElement('tr');
        for (const accidental of ['b', '', '#']) {
            const cell = document.createElement('td');
            const noteName = rootLetter + accidental;
            if (ALL_NOTES.includes(noteName)) {
                const noteButton = radioButtonWithLabel('rootPicker', noteName);
                cell.appendChild(noteButton);
            }
            row.appendChild(cell);
        }
        body.appendChild(row);
    }
    // result.addEventListener('click', (e) => console.log('jbk', e.target.nodeName, e.target.textContent));
    return result;
}
// `<tbody><tr><td class="note"></td><td class="note selectedNote">C</td><td class="note">C#</td></tr><tr><td class="note">Db</td><td class="note">D</td><td class="note">D#</td></tr><tr><td class="note">Eb</td><td class="note">E</td><td class="note"></td></tr><tr><td class="note"></td><td class="note">F</td><td class="note">F#</td></tr><tr><td class="note">Gb</td><td class="note">G</td><td class="note">G#</td></tr><tr><td class="note">Ab</td><td class="note">A</td><td class="note">A#</td></tr><tr><td class="note">Bb</td><td class="note">B</td><td class="note"></td></tr></tbody>`

// TODO: This should come from something/where we can use these as keys to get chords/scales/etc?
const NOTE_COLLECTIONS = { SCALES, CHORDS };

function buildCollectionTypeTable() {
    const result = document.createElement('table');
    const body = document.createElement('tbody');
    result.appendChild(body);
    const row = document.createElement('tr');
    for (const typeName of Object.keys(NOTE_COLLECTIONS)) {
        const cell = document.createElement('td');
        const typeButton = radioButtonWithLabel('collectionType', typeName, titleCase);
        cell.appendChild(typeButton);
        row.appendChild(cell);
    }
    body.appendChild(row);
    // result.addEventListener('click', (e) => console.log('jbk', e.target.nodeName, e.target.textContent));
    return result;
}

function buildCollectionSelect(items) {
    const result = document.createElement('select');
    result.size = 10;
    for (const item of items) {
        const itemOption = document.createElement('option');
        itemOption.value = item;
        itemOption.textContent = titleCase(item);
        result.appendChild(itemOption);
    }
    return result;
}

export function buildPicker(parentDiv, state) {
    const container = document.createElement('div');
    const rootTable = buildRootTable();
    container.appendChild(rootTable);
    const collectionTypeTable = buildCollectionTypeTable();
    container.appendChild(collectionTypeTable);
    const collectionSelects = Object.values(NOTE_COLLECTIONS).map(collections => buildCollectionSelect(Object.keys(collections)));
    collectionSelects.forEach(cs => container.appendChild(cs));
    parentDiv.appendChild(container);
}


function Picker() { }
