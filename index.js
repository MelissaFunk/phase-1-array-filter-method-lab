function findMatching(myArray, name) {
    return myArray.filter(string => 
        string.toLowerCase() === name.toLowerCase()
        )
}

function fuzzyMatch(myArray, name) {
    return myArray.filter(string =>
        string.indexOf(name) === 0
        )
}

function matchName(myArray, objects) {
    return myArray.filter(string =>
        string.name === objects
    )
}