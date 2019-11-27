const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { PORT, connect } = require("./config");

app.use(cors())

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use("/", require("./routes"))
app.use("/animal", require("./routes/animal"))
app.use("/user", require("./routes/user"))

connect(() => {
    app.listen(PORT, () => {
        console.log((`This app running on PORT : ${PORT || 3000}`));
    })
})

