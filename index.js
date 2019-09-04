function findMatching(driversArray, string) {
    return driversArray.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driversArray, string) {
    return driversArray.filter(name => name.startsWith(string));
}

function matchName(driversArray, string) {
    return driversArray.filter(driverObj => driverObj.name === string);
}