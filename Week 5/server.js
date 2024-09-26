const express = require('express');
const app = express();
const port = 3000

app.get('/multiply/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    let ans = a*b;
    res.json({
        ans: a*b
    })
});
app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    let ans = a+b;
    res.json({
        ans: a+b
    })
});
app.get('/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    let ans = a/b;
    res.json({
        ans: a/b
    })
});
app.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    let ans = a-b;
    res.json({
        ans: a-b
    })
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
