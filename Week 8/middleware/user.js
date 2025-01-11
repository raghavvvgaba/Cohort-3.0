const jwt = require('jsonwebtoken');
const { JWT_USER_SECRET } = require("../config");
function UserAuth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_USER_SECRET);
    if(decodedData){
        req.userId = decodedData._id;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    UserAuth
}