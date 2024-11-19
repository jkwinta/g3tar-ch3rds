
const COLOURS = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'orange',

    'purple',
    'teal',

    'aqua',
    'silver',
    'indigo',
    'violet',
    'brown',
    'grey',
];


const VIEW_SIZE = 10;
const PIP_RADIUS = 5;

export function getColour(index) {
    return COLOURS[index];
}

function getColouredDotSvg(colour) {
    return `<svg xmlns="http://www.w3.org/2000/svg"
            height=${VIEW_SIZE}
            width=${VIEW_SIZE}
            viewBox="0 0 ${VIEW_SIZE} ${VIEW_SIZE}"
            display="block"
        >
            <circle
                cx=${VIEW_SIZE / 2}
                cy=${VIEW_SIZE / 2}
                r=${PIP_RADIUS}
                fill=${colour}
            />
        </svg>`;
}

export function makeLegendEntry(index, text) {
    const result = document.createElement('div');
    result.classList.add('legendEntry');
    result.innerHTML = `
        <div>${getColouredDotSvg(getColour(index))}</div>
        <div>${text}</div>
        <div><button class="removeChordButton"></button></div>
    `;
    return result;
}