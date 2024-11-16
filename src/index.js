import { titleCase } from './util.js';

// import { Picker, valueToString } from "./picker.js";

// const div = document.createElement('div');
// div.textContent = 'Nothing selected';
// document.getElementById('app').appendChild(div);
// const picker = new Picker(document.getElementById('app'));
// picker.addListener((v) => div.textContent = v != null ? valueToString(v) : 'Nothing selected');

let state = {};

function updateObject(obj, path, value) {
    if (Array.isArray(path) && path.length === 1) {
        path = path[0];
    }
    if (typeof path === 'string') {
        return { ...obj, [path]: value };
    }
    const pathNext = path[0];
    const pathRest = path.slice(1);
    return { ...obj, [pathNext]: updateObject(obj[pathNext], pathRest, value) };
}

function updateState(state) {
    updateSelectedChordLabel(state);
    writeLegend(state);
}

function addChord(state){
    const { selectedNote } = state;
    const { root, chordType } = selectedNote;
    if (root && chordType) {
        const chordList = state.chordList || [];
        if (!chordList.some(chord => chord.root === root && chord.chordType === chordType)){
            return updateObject(state, 'chordList', chordList.concat([{root, chordType}]));
        }
    }
    return state;
}

function updateSelectedChordLabel(state) {
    const { selectedNote } = state;
    const { root, chordType } = selectedNote;
    let text;
    if (root && chordType) {
        text = `${root} ${titleCase(chordType)}${chordType === 'NOTE' ? '' : ' Chord'}`;
    } else if (!root && !chordType) {
        text = 'Select a chord';
    } else if (!root) {
        text = 'Select a root note';
    } else {
        text = 'Select a chord type';
    }
    selectedLabel.textContent = text;
}

const selectedLabel = document.getElementById('selectedChord');

const selectorParent = document.getElementById('selector');
const rootNoteRadioButtons = selectorParent.querySelectorAll('input[type="radio"][name="selectedNote"]');
[...rootNoteRadioButtons].forEach(radioButton => {
    radioButton.addEventListener('change', changeEvent => {
        state = updateObject(state, ['selectedNote', 'root'], changeEvent.target.value);
        updateState(state);
    });
});
const selectElement = selectorParent.querySelector('select');
selectElement.addEventListener('change', changeEvent => {
    state = updateObject(state, ['selectedNote', 'chordType'], changeEvent.target.value);
    updateState(state);
});

const addChordButton = document.getElementById('addChordButton');
addChordButton.addEventListener('click',()=>{
    state = addChord(state);
    updateState(state);
});

const legendElement = document.getElementById('legend');
function writeLegend(state) {
    const chordList = state.chordList || [];
    let i = 0;
    while (i < chordList.length) {
        let chordDiv = legendElement.children[i];
        if (!chordDiv) {
            chordDiv =  document.createElement('div');
            legendElement.insertBefore(chordDiv, null);
        }
        let { root, chordType } =chordList[i];
        chordDiv.textContent = `${root} ${titleCase(chordType)}`;
        i++;
    }
    while(legendElement.childElementCount > i) {
        legendElement.lastChild.remove();
    }
}