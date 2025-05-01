import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

interface AuthenticatedRequest extends Request {
    userId?: string;
}   //telling ts that request object has a userId field

export const userMiddleware = (req: AuthenticatedRequest,res: Response,next: NextFunction) => {
    const header = req.headers["authorization"];
    if(!header){
        res.status(401).json({
            message: "Missing token"
        })
    }
    try{
        const decoded = jwt.verify(header as string, JWT_PASSWORD) as {_id: string };
        if(decoded){
            req.userId = decoded._id;
            next();
        }
    }   catch (err) {
        res.status(403).json({
            message: "Token expired or invalid"
        })
    }

}