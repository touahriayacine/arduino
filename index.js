const express = require('express')
const app = express()
let obj1, obj2

app.head("/", (req, res) => {
    console.log("UptimeRobot")
})

app.get("/", (req, res) => {
    console.log(req.headers)
    // console.log(obj1, obj2)

    if (req.headers.isarduino == '1') { res.json(obj1) }
    else { res.json(obj2) }

})

app.get("/arduino.json", (req, res) => {
    res.sendfile("./arduino.json")

})


app.post("/", (req, res) => {
    const bool = req.headers.isarduino
    // console.log(bool)
    console.log(req.body)
    if (req.headers.isarduino == '1') {

        obj2 = req.body
    }
    else {
        console.log('3l')
        obj1 = req.body
    }
    res.json({ Posted: "Done" })
})


app.listen(80, () => {
    console.log('Server dis listening on port 80....')
})