import { Picker, valueToString } from "./picker.js";

const div = document.createElement('div');
document.getElementById('app').appendChild(div);
const picker = new Picker(document.getElementById('app'));
picker.addListener((v) => div.textContent = v != null ? valueToString(v) : 'Nothing selected');
