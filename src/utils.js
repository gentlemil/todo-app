export function isValidNumberInput(e) {
    if (isNaN(parseInt(e.key, 10)) === true) return e.preventDefault();
    return true;
}

export function parseInputAsNumber(val) {
    if (val === '') return -1;
    return parseInt(val, 10);
}


// export function {}
// export function {}
// export function {}
