function titleCaseWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function titleCase(s) {
    return s.split(' ').map(titleCaseWord).join(' ');
}

export function shuffle(a) {
    const result = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}


export function zip(...lists) {
    const result = [];
    const minLength = Math.min(...lists.map(l => l.length));
    for (let i = 0; i < minLength; i++) {
        if (lists.every(l => i in l)) {
            result[i] = lists.map(l => l[i]);
        } else {
            break;
        }
    }
    return result;
}

export function uniqueValues(list) {
    const result = [];
    for (let item of list) {
        if (item != null && !result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

export function numericalSorter(a, b) {
    return a - b;
}

export function numSum(list) {
    return list.reduce((a, b) => a + b, 0);
}

export function numProd(list) {
    return list.reduce((a, b) => a * b, 1);
}

export function range1(stop) {
    if (stop > 0) {
        return Array(stop).fill(null).map((_v, i) => i);
    }
    return [];
}
