const fs = require("fs")
const process = require("process")

const createLogsDirectory = () => {
    let pathDir = `${__dirname}/Logs`
    let numberOfLogFiles = 10
    if (!fs.existsSync(pathDir)) {
        fs.mkdir(pathDir, err => {
            if (err) {
                throw err
            }
            console.log("Logs directory created")
            try {
                process.chdir("./Logs")
                console.log("Change current working directory to Logs")
            } catch (error) {
                console.log("Directory is not found")
            }

            for (let i = 0; i < numberOfLogFiles; i++) {
                fs.appendFile(`log${i}.txt`, `Hello from log${i} `, err => {
                    if (err) {
                        throw err
                    }
                    console.log(`log${i}.txt is created`)
                })
            }
        })
    } else {
        console.log("Logs directory already exists")
    }
}

createLogsDirectory()
