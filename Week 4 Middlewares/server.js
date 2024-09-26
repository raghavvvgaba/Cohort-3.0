// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//function that returns a boolean if age is atleast 14

function isOldEnough(age){
    if (age>=14)
        return true;
    else
        return false;
}

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if (age>=14)
        next();
    else
        res.json({
            msg: "Go back to momma and cry, bitch!"
    })
}

// app.use(isOldEnoughMiddleware); 

// We can use something like this to attach the middleware to all the routes. The order is important. If it is placed below ride 1, only the routes below it will go through thr middleware. Not ride 1

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
    
        res.json({
            msg : "You have access to ride 1"
        })

});

app.get('/ride2', isOldEnoughMiddleware, (req, res) => {
    
    res.json({
        msg : "You have access to ride 2"
    })

});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
