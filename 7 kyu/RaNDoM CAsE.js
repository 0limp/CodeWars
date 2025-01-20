// RaNDoM CAsE
function randomCase(x) {
    return [...x].map(char => {
        return Math.floor(Math.random() * 2) ? char.toUpperCase() : char.toLowerCase()
    }).join('');
}

