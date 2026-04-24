const jwt = require("jsonwebtoken");

async function authArtist(req,res,next){
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorised"});
    }

    try{
        const decoded= await jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role!="artist"){
            return res.status(403).json({message:"You are not an artist!"})
        }
        req.user=decoded;
        next();

    
    }
    catch(error){
        console.log(error);
        return res.status(401).json({message:"Unauthorised"});
    }
}

async function authUser(req,res,next){
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorised"});
    }

    try{
        const decoded= await jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role!="user"){
            return res.status(403).json({message:"Only user can access all music!"})
        }
        req.user=decoded;
        next();

    
    }
    catch(error){
        console.log(error);
        return res.status(401).json({message:"Unauthorised"});
    }
}



module.exports={authArtist,authUser};