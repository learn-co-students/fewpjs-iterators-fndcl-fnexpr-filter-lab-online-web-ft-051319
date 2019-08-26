function findMatching( drivers, name ) {
  return drivers.filter( n => n.toLowerCase() === name.toLowerCase() )
}

 function fuzzyMatch( drivers, letters ){
  let length = letters.length
  return drivers.filter( n => n.slice( 0,length ) ===letters )
}

 function matchName( drivers, name ) {
  return drivers.filter( n => n.name === name )
}
