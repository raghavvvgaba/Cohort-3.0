// const express = require('express');
// const Router = express.Router

// OR 

const { Router } = require('express');      //both are fine
const userRouter  = Router();       //calling the function Router, it isn't a class
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel, CourseModel } = require('../db');
const { z } = require('zod');
const { PurchaseModel } = require('../db');
require('dotenv').config()
const { UserAuth } = require("../middleware/user")
const { JWT_USER_SECRET } = require("../config")


userRouter.post('/signup', async function(req,res){
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
        await UserModel.create({
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

userRouter.post('/login', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const response = await UserModel.findOne({
        email: email
    });
    console.log(response.password);
    if(!response){
        res.status.json({
            message: "User does not exist"
        })
        return;
    }
    const passwordMatch = await bcrypt.compare(password, response.password);
    if(passwordMatch){
        const token = jwt.sign({
            id: response._id
        }, JWT_USER_SECRET);
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

userRouter.post('/purchase', UserAuth, async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;
    const courseexist = await PurchaseModel.find({
        courseId
    });
    const course = courseId.toString
    if(courseexist){
        try{
            const addPurchase = await PurchaseModel.create({
                userId: userId,
                courseId: courseId
            })
            res.json({
                message: "You have bought the course"
            })
        }
        catch(e){
            res.status(403).json({
                message: "Course couldn't be created"
            })
        }
    }
    else{
        res.json({
            message: "Course doesn't exist"
        })
    }
});

userRouter.get('/my-purchases', UserAuth, async function(req,res){
    const userId = req.userId;
    const purchases = await PurchaseModel.find({
        userId
    });

    const courseData = await CourseModel.find({
        _id: purchases.map(x => x._id)
    })
    res.json({
        purchases
    })

});

module.exports = {
    userRouter: userRouter
}