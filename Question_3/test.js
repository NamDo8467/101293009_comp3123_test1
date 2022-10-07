const { readFile } = require("fs")
const m = async () => {
    try {
        const result = await Promise.all([
            readFile("txt1.txt", (err, data) => {
                if (err) {
                    throw err
                }
                console.log(data)
            }),
            setTimeout(() => {
                console.log("ii")
            }, 2000),
			readFile("txt2.txt", (err, data) => {
				if (err) {
					throw err
				}
				console.log(data);
			})
        ])
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
    } catch (error) {
        console.log(error)
    }
}

