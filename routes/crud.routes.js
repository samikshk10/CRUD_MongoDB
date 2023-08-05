const express = require('express');
const router = express.Router();
const { getStudent,createStudent, deleteStudent,updateStudent } = require('../controller/crudController');

router.get('/get-student',getStudent);
router.post('/add-student',createStudent);
router.get('/delete-student/:id',deleteStudent);
router.post('/update-student/',updateStudent);


module.exports = router;