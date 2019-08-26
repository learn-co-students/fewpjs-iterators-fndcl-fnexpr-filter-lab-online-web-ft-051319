function findMatching(drivers, name) {
    const testName = name.toLowerCase();

    let matchingDrivers = drivers.filter(driver => {
        let driverTestName = driver.toLowerCase();
        if (driverTestName === testName) {
            return driver;
        }
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
    const stringLength = string.length;

    let matchingDrivers = drivers.filter(driver => {
        let startingLetters = driver.slice(0, stringLength);

        if (startingLetters === string) {
            return driver;
        }
    });
    return matchingDrivers;
}

function matchName(drivers, string) {
    let matchingDrivers = drivers.filter(driverObj => {
        if (driverObj.name === string) {
            return driverObj;
        }
    });
    return matchingDrivers;
}