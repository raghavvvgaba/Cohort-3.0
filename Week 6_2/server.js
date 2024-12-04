const express = require('express');
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const JWT_SECRET = "raghav123";
const PORT = 3000;

const users = [];   //we should be using a db instead of storing it like this

function auth(req,res,next){
    const token = req.headers.token;    //the req object is same for everyone, if i pass something here in req object, it gets passed on to the next function's req
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username;    //passing on the username to the next object
        next();
    }
    else{
        res.json({
            message: "You are not logged in"
        })
    }
}

function logger(req,res,next){
    console.log(req.method + " request came");
    next();
}       //to log the type of requests which are being called (get, post)

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })

    //we should check if a user with this username already exists

    res.json({
        message: "You are signed in"
    })
})

app.post("/signin", logger, function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i = 0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }
    if(!foundUser){
        res.json({
            message: "Credentials incorrect"
        })
        return
    }
    else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
    
})

app.get("/me", logger, auth, function(req,res){
    // const decodedData = jwt.decode(token);       // this is used to decode the token but it doesn't verify using the JWT_SECRET which can result in someone else signing in with the same username with their own token

    
        let foundUser = null;
        for(let i = 0; i<users.length; i++){
        if(users[i].username == req.username){  //req.username is the received data from the middleware
            foundUser = users[i];
        }
    }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
