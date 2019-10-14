const expess = require("express");
const router = expess.Router();
const taskList = require('../controller/appController');


router.route('/').get(taskList.student_list)          //get request for fetching list of students
    .post(taskList.add_student);                          //post request for adding new record
router.route('/:id').get(taskList.student_detail)     //get record of particular student
    .put(taskList.update_detail)                         //put request for updating particular record
    .delete(taskList.delete_student)
module.exports = router;