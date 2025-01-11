const { Router } = require('express');
const { CourseModel } = require('../db');

const courseRouter = Router();

courseRouter.post('/purchase',function(req,res){

});

courseRouter.get('/preview',async function(req,res){
    const courses = await CourseModel.find({});

    res.json({
        courses
    })
});


module.exports = {
    courseRouter: courseRouter
}

