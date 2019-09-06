function findMatching(array, string) {
    let match = array.filter(name => (name.toLowerCase() === string.toLowerCase()))
    return match
}

function fuzzyMatch(array, string) {
    let match = array.filter(name => (name.charAt(0) === string.charAt(0)))
    return match
}

function matchName(array, string) {
    let match = array.filter(obj => (obj.name.toLowerCase() === string.toLowerCase()))
    return match
}