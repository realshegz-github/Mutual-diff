//Create a function that accept multiple arrays as arguments and returns unique array
function uniqueArr(){
    let value = [...arguments].flat()
    let uniqueValue = [...new Set(value)]
    return uniqueValue
}git