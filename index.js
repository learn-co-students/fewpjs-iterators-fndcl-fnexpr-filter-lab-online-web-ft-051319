// Code your solution here
function findMatching(drivers, n) {
    return drivers.filter(function(driver){
        return driver.toLowerCase() === n.toLowerCase();
    })
}

function fuzzyMatch(drivers, person) {
    return drivers.filter(function(driver){
        return driver[0].toLowerCase() === person[0].toLowerCase();
    })
}

function matchName(drivers, person) {
    return drivers.filter(function(driver){
        return driver.name === person;
    })
}