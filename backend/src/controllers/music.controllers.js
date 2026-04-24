const { musicModel } = require("../models/music.model.js");

const { uploadFile } = require("../services/storage.service.js");
const { albumModel } = require("../models/album.model.js");

async function createMusic(req, res) {
  const title = req.body.title;
  const file = req.file;

  if (!file || !file.buffer) {
    return res.status(400).json({ message: "Music file is required" });
  }

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics,
    },
  });
}

async function getAllMusic(req, res) {
  // const musics= await musicModel.find().populate("artist");
  const musics = await musicModel.find().skip(1).limit(2).populate("artist", "username email");

  res.status(200).json({
    message: "Musics retrieved successfully",
    musics: musics,
  });
}

async function getAllAlbums(req, res) {
  // const musics= await musicModel.find().populate("artist");
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist");

  res.status(200).json({
    message: "albums retrieved successfully",
    albums: albums,
  });
}

async function getAlbumById(req, res) {
  const albumId = req.params.albumId;
  const album = await albumModel.find({ _id: albumId }).populate("artist");

  res.status(200).json({
    message: "Album retrieved successfully",
    album: album,
  });
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusic,
  getAllAlbums,
  getAlbumById,
};
