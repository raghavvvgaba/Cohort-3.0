import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
import { Request } from "express";
import { random } from "./utils";
import cors from 'cors';


const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
    //@ts-ignore
    domains: ["http://localhost:5173/"] 
}))

interface AuthenticatedRequest extends Request {
    userId?: string;
} 

app.post("/api/v1/signup", async (req,res) =>{
    //TODO: zod validation, hash the password
    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "User signed up"
        })
    }
    catch(e){
        res.json({
            message: "User already exists"
        })
    }
})

app.post("/api/v1/signin", async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            _id: existingUser._id
        }, JWT_PASSWORD, {expiresIn: '1h'})

        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})
    
app.post("/api/v1/content", userMiddleware, async (req: AuthenticatedRequest,res) =>{
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
        tage: []
    })

    res.json({
        message: "Content added"
    })
})

app.get("/api/v1/content", userMiddleware, async (req: AuthenticatedRequest,res) =>{
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async (req: AuthenticatedRequest,res) =>{
    //@ts-ignore
    let contentId: req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        userId: req.userId
    })
    res.json({
        message: "Content deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req: AuthenticatedRequest,res) =>{
    const share = req.body.share;
    if(share){
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        })

        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        } 
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })
        res.json({
            hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        });
        res.json({
            message: "Removed sharable link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req,res) =>{
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    });
    if(!link){
        res.status(411).json({ 
            message: "Sorry incorrect input"
        })
        return;
    } 
    const content = await ContentModel.find({
        userId: link.userId
    })
    const user = await UserModel.findOne({
        _id: link.userId
    })
    if(!user){
        res.status(411).json({
            message: "User not found, error should not ideally happen, you should not be coming here. If you came, you really messed it up"
        })
        return;
    }
    res.json({
        username: user.username,
        content: content
    })
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
});