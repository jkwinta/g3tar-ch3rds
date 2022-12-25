import { ALL_NOTES, NOTE_LETTERS } from './notes.js';
import { SCALES } from './note_collections/scales.js';
import { CHORDS } from './note_collections/chords.js';
import { titleCase } from './util.js';

function radioButtonWithLabel(group, value, labelTransformation = x => x) {
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
    return result;
}

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

export function Picker(parent) {
    this.parent = parent;
    this.selectedRoot = null;
    this.selectedCollectionType = null;
    this.selectedCollections = {};

    this.rootTable = buildRootTable();
    this.rootTable.addEventListener('change', e => {
        this.selectedRoot = e.target.value;
        this.notify();
        e.stopPropagation();
    });

    this.collectionTypeTable = buildCollectionTypeTable();
    this.collectionTypeTable.addEventListener('change', e => {
        this.selectedCollectionType = e.target.value;
        for (const collectionType of Object.keys(NOTE_COLLECTIONS)) {
            this.collectionSelects[collectionType].style.display = collectionType === e.target.value ? '' : 'none';
        }
        this.notify();
        e.stopPropagation();
    });

    this.collectionSelects = {};
    for (const collectionType of Object.keys(NOTE_COLLECTIONS)) {
        this.collectionSelects[collectionType] = buildCollectionSelect(Object.keys(NOTE_COLLECTIONS[collectionType]));
        this.collectionSelects[collectionType].style.display = 'none';
        this.collectionSelects[collectionType].addEventListener('change', e => {
            this.selectedCollections[collectionType] = e.target.value;
            this.notify();
            e.stopPropagation();
        });
    }

    this.container = document.createElement('div');
    this.container.appendChild(this.rootTable);
    this.container.appendChild(this.collectionTypeTable);
    Object.values(this.collectionSelects).forEach(cs => this.container.appendChild(cs));
    this.parent.appendChild(this.container);

    this.listeners = [];
}
Picker.prototype.addListener = function (newListener) {
    this.listeners.push(newListener);
}
Picker.prototype.getValue = function () {
    const result = {
        root: this.selectedRoot,
        collectionType: this.selectedCollectionType,
        collection: this.selectedCollections[this.selectedCollectionType],
    };
    if (Object.values(result).every(v => v != null)) {
        return result;
    }
    return null;
};
Picker.prototype.notify = function () {
    this.listeners.forEach(listener => listener(this.getValue()));
}

export function valueToString(value) {
    return [
        value.root,
        titleCase(value.collection),
        titleCase(value.collectionType.slice(0, -1)),
    ].join(' ');
}
