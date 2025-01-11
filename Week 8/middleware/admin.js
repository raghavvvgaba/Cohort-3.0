const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET } = require("../config");
function AdminAuth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_ADMIN_SECRET);
    if(decodedData){
        req.userId = decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    AdminAuth
}