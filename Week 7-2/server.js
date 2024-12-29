const express = require('express');
const { UserModel, ToDoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const JWT_SECRET = "asdfhioran!231"
const port = 3000

mongoose.connect("mongodb+srv://anonymous090304:Z8TRlCr6s6EEndQd@cluster0.lb9fc.mongodb.net/todo-raghav-22")
const app = express();
app.use(express.json());

app.post('/signup', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try{
        const hashedPassword = await bcrypt.hash(password, 5);  //hashing the password
        console.log(hashedPassword);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
    } catch(e){
        console.log("Bakarchodi");
    }
    res.json({
        message: "You are signed up"
    });

});
app.post('/signin', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });
    
    if(!response){
        res.status(403).json({
            message: "User does not exist"
        })
    }

    const passwordMatch = await bcrypt.compare(password, response.password);  //compare the password given by the user to the password found in the db (i.e the hashed password)


    if(passwordMatch){
        const token = jwt.sign({
            id: response._id 
        }, JWT_SECRET);
        res.json({
            token
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

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
