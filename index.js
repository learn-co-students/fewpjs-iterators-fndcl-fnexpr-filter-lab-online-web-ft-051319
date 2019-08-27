// Code your solution here
function findMatching(drivers, string) {
  let match = drivers.filter(e => {
    return e === string
  });
  return match;
};

function fuzzyMatch(drivers, string){
  let stringLength = string.length
  let match = drivers.filter(driver => {
    return driver.substr(0, stringLength).toLowerCase() === string.toLowerCase()
  })
  return match;
}

function matchName(drivers, string){
  let match = drivers.filter(driver => {
    return driver.name === string
  })
  return match;
}
