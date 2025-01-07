const express = require('express');
const app = express();
const port = 3000;
const { userRouter } = require('./Routes/users');
const { courseRouter } = require('./Routes/course');
const { adminRouter } = require('./Routes/admin');
const { UserModel, AdminModel, CourseModel, PurchaseModel } = require('./db'); 
const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env.MONGO_URL);

app.use(express.json());

app.use('/users', userRouter);
app.use('/courses/', courseRouter);
app.use('/admin/', adminRouter);


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port);
    console.log(`Server is running on http://localhost:${port}`)
}
main();