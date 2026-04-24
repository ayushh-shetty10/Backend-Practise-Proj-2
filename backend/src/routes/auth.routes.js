const express = require("express");
const {registerUser,loginUser,logOutUser}=require("../controllers/auth.controllers.js")

const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logOutUser);




module.exports=router;