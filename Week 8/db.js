const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { setThePassword } = require('whatwg-url');
const ObjectId = mongoose.ObjectId;




const User = new Schema({
    // _id : ObjectId,
    name: String,
    email: {type: String, unique: true},
    password: String
});

const Admin = new Schema({
    // _id : ObjectId,
    name: String,
    email: {type: String, unique: true},
    password: String
})

const Course = new Schema({
    _id: ObjectId,
    title: String,
    price: Number,
    description: String,
    imageURL: String,
    creatorId: ObjectId
})

const Purchases = new Schema({
    _id : ObjectId,
    courseId: ObjectId,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User);
const AdminModel = mongoose.model('admin', Admin);
const CourseModel = mongoose.model('course', Course);
const PurchaseModel = mongoose.model('purchase', Purchases);


module.exports = {
    UserModel : UserModel,
    AdminModel: AdminModel,
    CourseModel: CourseModel,
    PurchaseModel: PurchaseModel
}