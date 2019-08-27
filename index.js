// Code your solution here

function findMatching(drivers,string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(drivers,string) {
    return drivers.filter(driver => driver[0].toLowerCase() === string[0].toLowerCase());
};

function matchName(drivers,string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}
