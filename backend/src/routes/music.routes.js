const express =require("express");
const { createMusic,createAlbum,getAllMusic,getAllAlbums,getAlbumById} = require("../controllers/music.controllers");
const multer= require("multer");
const { authArtist ,authUser} = require("../middlewares/auth.middleware");


const router=express.Router();

const upload = multer({
    storage:multer.memoryStorage()
})

router.post("/upload",upload.single("music"),authArtist,createMusic);

router.post("/album",authArtist,createAlbum);

router.get("/",authUser,getAllMusic);

router.get("/getalbums",authUser,getAllAlbums);

router.get("/getalbum/:albumId",authUser,getAlbumById);




module.exports=router;