const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use("/", require("./routes"))
app.use("/animal", require("./routes/animal"))
app.use("/user", require("./routes/user"))

// app.get("/hafiz", (req, res) => {
//     res.send({ 
//         name: "Hafeez",
//         class : "Super"})
// })

// app.get("/lala", (req, res) => {
//     res.send({ data : req.params.name})
//     console.log(data)
// })

// app.get("/hafiz/:id", (req, res) => {
//     const datas = "Succesfully download"
//     console.log(datas);
//     res.download("./image/1.jpg")
// })

// app.post("/ayam", (req, res) => {
//     res.send({
//         message: "New item is added",
//         user: {
//             email : req.body.email,
//             password : req.body.password,
//             age: Number(req.body.age)
//         }
//     })
// })

// app.put("/mabar", (req, res) => {
//     const datas = "mabar"
//     res.send({ data : datas})
//     console.log("mabar")})


// app.put("/mabar/:id", (req, res) => {
//     const datas = "mabar cokk"
//     res.send({ data : datas})
//     console.log("mabar cok")})


app.listen(PORT, () => {
    console.log((`This app running on PORT : ${PORT}`));
    
})

