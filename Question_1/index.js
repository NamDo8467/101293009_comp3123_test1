const lowerCaseWords = array => {
    return new Promise((resolve, reject) => {
        let stringArray = array.filter(item => typeof item === "string")
        if (stringArray.length == 0) {
            reject("No string-typed input found")
        }
        resolve(stringArray.map(string => string.toLowerCase()))
    })
}

lowerCaseWords([ 10, true, 25, false])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

    lowerCaseWords([ "Gnc",10, true, 25, false])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

