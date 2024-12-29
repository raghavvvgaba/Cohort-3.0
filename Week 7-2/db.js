const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, unique: true}, 
    password: String,
    name: String
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
});

const UserModel = mongoose.model('users', User); //users collection ke andar User schema
const ToDoModel = mongoose.model('todos', Todo); //todos collection ke andar Todo schema


module.exports = {
    UserModel: UserModel,
    ToDoModel: ToDoModel
}
