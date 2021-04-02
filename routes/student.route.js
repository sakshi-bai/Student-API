const express= require("express");
const router= express.Router();

const student_controller= require("../controllers/student.controller")

router.get("/test", student_controller.test)
router.post("/create",student_controller.create_student)
router.get("/:id",student_controller.student_details)
router.put("/:id/update",student_controller.update_student)
router.delete("/:id/delete",student_controller.delete_student)

module.exports= router;