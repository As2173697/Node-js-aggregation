const express = require("express");
var router = express.Router();
const student = require('./controller/student')

router.post('/save',student.saveStudent);
router.get('/getAll', student.getAllStudent);
router.get("/getAllLocations", student.getAllLocations)






module.exports = router;