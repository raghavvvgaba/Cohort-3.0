const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3600;

// Middleware
app.use(express.json());

// function generateToken(){
//     let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//     let token = ""
//     for(let i = 0; i <10; i++){
//         let ran = Math.floor(Math.random() * a.length);
//         token = token + a[ran];
//     }
//     return token;
// }



//instead of creating a token by ourselves, we use JWT
const JWT_SECRET = "randomraghav";


const users = [];

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "You are signed up"
    })
    console.log(users)
})

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;
    for (let i = 0; i <users.length; i++){
        if(users[i].username == username && users[i].password == password){
            founduser = users[i];
        }
    }
    if(founduser){
        // const token = generateToken(); 
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);     //signature of jwt.sign is that it takes two arguments-> what to encode and key to encode
        // founduser.token = token;   Now it doesn't have to be stored as the token itself stores its state
        res.json({
            token: token
        })
        console.log(users);
    }
    else{
        res.status(403).json({
            msg: "Invalid username or password"
        })
    }
    
})

app.get("/me", function(req,res){
    const token = req.header.token; //jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET);   //this will get back the {username: "raghav@gmail.com"}
    const username = decodedInformation.username;
    let founduser = null;

    for(let i = 0; i<users.length; i++){
        if(users[i].username == username){
            founduser = users[i];
        }
    }       //checking if the username is present in the database, and then returning back username and password in the code below
    if (founduser){
        res.json({
            username: founduser.username,
            password: founduser.password
        })
    }
    else{
        res.json({
            message: "Token invalid"
        })
    }
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
