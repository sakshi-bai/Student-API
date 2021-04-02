const Student = require("../models/student.model")

exports.test=(req,res)=>{
    res.send("greeting from text controller")
}

exports.create_student=(req,res)=>{
    let student= new Student({
        name: req.body.name,
        studentid: req.body.studentid
    });
     student.save((err)=>{
         if(err){
             return next(err);
         }
         res.send("Record create Successfully")
     });
     
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id, (err, student)=>{
        if (err) return next(err);
        res.send(student)
    })
}

exports.update_student=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,student)=>{
        if (err) return next(err);
        res.send("Record updated")
    })
}

exports.delete_student=(req,res)=>{
    Student.findByIdAndRemove(req.params.id, (err, student)=>{
        if (err) return next(err); 
        res.send("Record delete successfully")
    })
}