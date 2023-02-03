const multer = require("multer");

const upload = multer();

// import express from 'express'
const express = require("express");
const { getSpeech } = require("../controllers/speech.js");
// import { getSpeech } from '../controllers/speech.js';

const router = express.Router();

router.post("/addSpeech", upload.single("file"), getSpeech);

module.exports = router;
