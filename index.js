// Code your solution here

function findMatching(driversArray, string){
    let drivers = driversArray.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
    return drivers
}

function fuzzyMatch(driversArray, string){
    let drivers = driversArray.filter(driver => {
        return driver.charAt(0) === string.charAt(0)
    })
    return drivers
}

function matchName(driversArray, string){
    let drivers = driversArray.filter(driverObj => {
       return  driverObj.name === string
    })
    return drivers
}