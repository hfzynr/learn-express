// const { animal : animals } = require("../../models")
const { get } = require("../../config")
const objectId = require('mongodb').ObjectId

module.exports = {
    getAll: (req,res) => {
        get()
            .collection("animals")
            .find({})
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas", data: result })
            })
            .catch(error => {
                console.log(error)
            })
    },

    getOne: (req, res) => { 
        get()
            .collection("animals")
            .findOne(req.body)
            .then(result => {
                res.send({ message: "Successfully get one data", data: result})
            })
            .catch(error => {
                console.log(error)
            })
    },

    addOne: (req, res) => {
        get()
            .collection("animals")
            .insertOne(req.body)
            .then(result => {
                res.send({ message: "Data successfully added", data: result})
            })
            .catch(error => {
                console.log(error)
            })
    },

    updateOne: (req, res) => {
        get()
        .collection("animals")
        .update({ _id: objectId(req.params.id) },{$set: req.body} )
        .then(result => {
            res.send({ message: "Update data successfully", data: result });
        })
        .catch(error => {
            console.log(error);
        });
    },

    deleteOne: (req, res) => {
        get()
            .collection("animals")
            .deleteOne(req.body)
            .then(result => {
                res.send({ message: "Data successfully Deleted", data: result})
            })
            .catch(error => {
                console.log(error)
            })
    }
    }