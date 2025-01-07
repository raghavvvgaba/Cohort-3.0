// const express = require('express');
// const Router = express.Router

// OR 

const { Router } = require('express');      //both are fine

const userRouter  = Router();       //calling the function Router, it isn't a class
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require('/Users/nidhi/OneDrive/Desktop/Raghav/Cohort 3.0/Week 8/db');
const { z } = require('zod');
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

function UserAuth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_USER_SECRET);
    if(decodedData){
        req.userId = decodedData._id;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}


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

userRouter.get('/purchases',function(req,res){

});

module.exports = {
    userRouter: userRouter
}