// Code your solution here
function findMatching(driverArray, string) {
    const match = driverArray.filter(driver => (driver.toUpperCase() === string.toUpperCase()))
    return match
}

function fuzzyMatch(driverArray, string) {
    const match = driverArray.filter(driver => (driver.charAt(0) === string.charAt(0)))
    return match
}

function matchName(driverArray, string){
    const match = driverArray.filter(driver => (driver.name.toUpperCase() === string.toUpperCase()))
    return match
}