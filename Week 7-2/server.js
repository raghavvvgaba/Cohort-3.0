const express = require('express');
const { UserModel, ToDoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
const JWT_SECRET = "asdfhioran!231"

mongoose.connect("mongodb+srv://anonymous090304:Z8TRlCr6s6EEndQd@cluster0.lb9fc.mongodb.net/todo-raghav-22")
const app = express();
app.use(express.json());

app.post('/signup', async function(req,res){
    const email = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in"
    });

});
app.post('/signin', async function(req,res){
    const email = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id 
        }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post('/todo', auth, async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    await ToDoModel.create({
        title,
        userId
    })

    res.json({
        userId
    })
});

app.get('/todo', auth, async function(req,res){
    const userId = req.userId;
    const todo = await ToDoModel.find({
        userId: userId
    })
    res.json({
        todo
    })
});

function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);
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

app.listen(3000);
