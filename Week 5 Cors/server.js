const express = require('express');
const app = express();
const port = 3000;

const cors = require("cors")  // cors
app.use(express.json()) // this is important. It allows you to access req.body in your route handlers.
app.use(cors({
    domains: ["http://localhost:3000\sum"] // allowing this frontend url to hit this backend
}))

app.post("/sum",(req,res)=>{
    const a = parseInt(req.body.a); 
    const b = parseInt(req.body.b);
    res.json({
        answer: a+b
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// run npx server in the terminal. it serves the html file on a HTTP server
// can also be used to remotely access files from a different computer if on the same network