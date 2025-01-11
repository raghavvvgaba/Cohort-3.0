const { Router } = require('express');
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AdminModel } = require('/Users/nidhi/OneDrive/Desktop/Raghav/Cohort 3.0/Week 8/db');
const { z } = require('zod');
const { CourseModel } = require('../db');
const { AdminAuth } = require("../middleware/admin");
const { JWT_ADMIN_SECRET } = require("../config")
require('dotenv').config()

adminRouter.post('/signup', async function(req,res){
    const requiredBody = z.object({
        name: z.string().min(3).max(40),
        email: z.string().email().min(4).max(50),
        password: z.string().min(5).max(100)
    });
    const parsedData = requiredBody.safeParse(req.body);

    if(!parsedData.success){
        res.json({
            message: "Incorrect format",
            error: parsedData.error
        })
        return;
    }

    try{
        const hashedPassword = await bcrypt.hash(parsedData.data.password, 5);
        await AdminModel.create({
            name: parsedData.data.name,
            email: parsedData.data.email,
            password: hashedPassword
        });
        res.json({
            message: "You are signed up"
        })
    }
    catch(e){
        console.log(e);
        res.json({
            message: "User already exists"
        })
    }

});

adminRouter.post('/login', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const response = await AdminModel.findOne({
        email: email
    });
    if(!response){
        res.status(403).json({
            message: "User does not exist"
        })
        return;
    }
    console.log(response._id);
    const passwordMatch = bcrypt.compare(password, response.password);
    if(passwordMatch){
        const token = jwt.sign({
            id: response._id
        }, JWT_ADMIN_SECRET);
        res.json({
            token
        })
    } 
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

adminRouter.post('/create-course', AdminAuth, async function(req,res){
    const AdminId = req.userId;
    const { title, price, description, imageURL } = req.body;
    try {
        const course = await CourseModel.create({
            title: title,
            price: price,
            description: description,
            imageURL: imageURL,
            creatorId: AdminId
        })
        res.json({
            message: "Course Created",
            courseId: course._id
        })
    }
    catch(e){
        console.log(e);
        res.status(403).json({
            message: "Something went wrong in creating the course"
        })
    }
});

adminRouter.put('/modify-course',AdminAuth, async function(req,res){
    const AdminId = req.userId;
    const { title, price, description, imageURL, courseId } = req.body;
    try {
        const course = await CourseModel.updateOne({
            _id: courseId, 
            creatorId: AdminId
        },{
            title: title,
            price: price,
            description: description,
            imageURL: imageURL,
        })
        res.json({
            message: "Course Updated",
            courseId: course._id
        })
    }
    catch(e){
        console.log(e);
        res.status(403).json({
            message: "Something went wrong in updating the course"
        })
    }

});

adminRouter.get('/get-course',AdminAuth, async function(req,res){
    const AdminId = req.userId;
    const course = await CourseModel.find({
        creatorId: AdminId
    });
    res.json({
        course
    }) 
});

module.exports = {
    adminRouter: adminRouter 
}