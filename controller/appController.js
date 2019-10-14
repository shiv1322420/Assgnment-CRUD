const operation = require('../model/appModel');
const async = require('async');
const taskObject = {
    student_list: async (req, res) => {
        try {
            let studentData = await operation.studentList();          //wait untill get response from studentList()
            if (studentData)
                res.send(studentData)
        } catch (error) {
            res.send(error)
        }

    },

    add_student: async (req, res) => {
        let data = req.body;
        try {
            let addData = await operation.addStudent(data);         //wait untill get response from addStudent()
            if (addData)
                res.send(addData)
        } catch (error) {
            res.send(error)
        }

    },

    student_detail: async (req, res) => {
        let id = req.params.id;
        try {
            let studentData = await operation.studentDetail(id);      //wait untill get response from studentDetail()
            if (studentData)
                res.send(studentData)
        } catch (error) {
            res.send(error)
        }
    },

    update_detail: async (req, res) => {
        let id = req.params.id;
        let data = req.body;
        try {
            let updateDetailsData = await operation.updateDetail(id, data);    //wait untill get response from updateDetail()
            if (updateDetailsData)
                res.send(updateDetailsData)
        } catch (error) {
            res.send(error)
        }
    },

    delete_student: async (req, res) => {
        let id = req.params.id;
        try {
            let deleteData = await operation.deleteStudent(id);      //wait untill get response from deleteStudent()
            if (deleteData)
                res.send(deleteData)
        } catch (error) {
            res.send(error)
        }
    }

}


module.exports = taskObject;