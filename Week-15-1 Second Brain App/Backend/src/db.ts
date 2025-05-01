import mongoose, {model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://anonymous090304:Z8TRlCr6s6EEndQd@cluster0.lb9fc.mongodb.net/second-brain-application?retryWrites=true&w=majority");

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new mongoose.Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
});

export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new mongoose.Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true}
});

export const LinkModel = model("Links", LinkSchema);

