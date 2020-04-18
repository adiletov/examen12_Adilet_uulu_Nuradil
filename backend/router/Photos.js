const path = require('path');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const {nanoid} = require('nanoid');

const config = require('../config');

const storage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, config.uploadPath)
    },
    filename: (req,file, cb)=>{
        cb(null, nanoid() + path.extname(file.originalname))
    }
});
const upload = multer({storage});


module.exports = router;