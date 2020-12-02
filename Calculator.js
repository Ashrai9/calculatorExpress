const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post('/', (req, res) => {
    //console.log(req.body)
    var Number1 = Number(req.body.Number1)
    var Number2 = Number(req.body.Number2)
    var Result = Number1 + Number2
    res.send("The total calculated value is " + Result)
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', (req, res) => {
    console.log(req.body)

    var Weight = parseFloat(req.body.Weight)
    var Height = parseFloat(req.body.Height)
    var Bmi = (Weight / (Height * Height)) * 10000
    res.send("Your BMI is " + Bmi)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})