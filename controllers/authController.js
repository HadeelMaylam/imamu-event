const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"Please enter all fields"});
    }
    const foundUser = await User.findOne({ email }).exec();
    if(foundUser){
        return res.status(401).json({message:"User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashedPassword,
    });
    const accessToken = jwt.sign({
        UserInfo:{
            id:user._id,
        },
    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"15m"}
);
    const refreshToken = jwt.sign(
        {
        UserInfo:{
            id:user._id,
        },
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:"7d"}
);
    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:true, //https
        sameSite:"None", //cross-site cookies
        maxAge:1000*60*60*24*7 //match with refresh token expiry
    });
    res.json({
        accessToken,
        email:user.email,
        name:user.name
    });
};
const logIn = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please enter all fields"});
    }
    const foundUser = await User.findOne({ email }).exec();
    if(!foundUser){
        return res.status(401).json({message:"User does not exist"});
    }
    const match = await bcrypt.compare(password,foundUser.password);
    if(!match){
        return res.status(401).json({message:"Wrong password"});
    }
    const accessToken = jwt.sign({
        UserInfo:{
            id:foundUser._id,
        },
    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"15m"}
);
    const refreshToken = jwt.sign(
        {
        UserInfo:{
            id:foundUser._id,
        },
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:"7d"}
);
    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:true, //https
        sameSite:"None", //cross-site cookies
        maxAge:1000*60*60*24*7 //match with refresh token expiry
    });
    res.json({
        accessToken,
        name:foundUser.name
    });
};
const refresh = (req,res)=>{
    const cookies = req.cookies;
    if(!cookies?.jwt) res.status(401).json({ message:"Unauthorized" });
    const refreshToken = cookies.jwt;
    jwt.verify(
        refreshToken, 
        process.env.REFRESH_TOKEN_SECRET, 
        async(err,decoded) =>{
        if(err) return res.status(403).json({ message: "Forbidden" });
        const foundUser = await User.findById(decoded.UserInfo.id).exec();
        if(!foundUser) return res.status(401).json({ message:"Unauthorized" });
            const accessToken = jwt.sign(
                {
                    UserInfo:{
                        id: foundUser._id,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,{ expiresIn: 15}
            );
            res.json({ accessToken }); 
    }
);
}
const logOut = (req,res)=>{
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204);
    res.clearCookie("jwt",{
        httpOnly: true,
        sameSite:"None",
        secure:true,
    });
    res.json({message: "Cookie Cleared"});
};
module.exports = {
    signUp,
    logIn,
    refresh,
    logOut
};