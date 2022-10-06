const lowerCaseWords = array => {
    return new Promise((resolve, reject) => {
        let stringArray = array.filter(item => typeof item === "string")
        if (stringArray.length == 0) {
            reject("No string-typed input found")
        }
        resolve(stringArray.map(string => string.toLowerCase()))
    })
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
