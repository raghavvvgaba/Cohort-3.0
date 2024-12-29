const express = require('express');
const { UserModel, ToDoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const JWT_SECRET = "asdfhioran!231"
const { z } = require('zod');
const port = 3000

mongoose.connect("mongodb+srv://anonymous090304:Z8TRlCr6s6EEndQd@cluster0.lb9fc.mongodb.net/todo-raghav-22");
const app = express();
app.use(express.json()); 

app.post('/signup', async function(req,res){
    
    //this is my required body which is an object, user shouldn't be able to send anything other than the required body


    // Step 1:  jo bhi validate krna hai, create a zod object, let it know the structure and write all the validations ahead of it
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(30),
        password: z.string().min(5).max(30)
    });    //.strict is used to ensure only specified data is received

    //Step 2: Parsing the data
    // const parsedData = requiredBody.parse(req.body);     //this doesn't throw error, it crashes the app, needs try catch
    const parsedDataWithSuccess = requiredBody.safeParse(req.body); //parsedDatawithSuccess contains three properties 1. success 2.error 3.data
    


    // 1. how to show the user the exact error

    if(!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }
    const password = parsedDataWithSuccess.data.password
    console.log(password);
    
    try{
        const hashedPassword = await bcrypt.hash(password, 5);  //hashing the password
        console.log(hashedPassword);

        await UserModel.create({
            email: parsedDataWithSuccess.data.email,
            password: hashedPassword,
            name: parsedDataWithSuccess.data.name
        });
        res.json({
            message: "You are signed up"
        })
    } catch(e){
        res.json({
            message: "User already exists"
        })
    }
    
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
