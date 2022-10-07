const fs = require("fs")
// const path = require("path")

const removeLogFiles = async () => {
    let pathDir = `${__dirname}/Logs`
    try {
        let files = await fs.promises.readdir(pathDir)
        files.forEach(file => {
            console.log(file)
        })
        files.forEach(file => {
            fs.unlink(`${pathDir}/${file}`, err => {
                if (err) {
                    throw err
                }
                console.log(`Delete file... ${file}`)
            })
        })
        fs.rmdir(pathDir, { recursive: true }, (err, data) => {
            if (err) {
                throw err
            }
            console.log("Logs directory is removed")
        })
    } catch (error) {
        console.log("Path is not found")
    }
}

removeLogFiles()
