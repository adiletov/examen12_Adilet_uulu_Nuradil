const path = require('path');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const {nanoid} = require('nanoid');

const config = require('../config');
const auth = require('../middleware/auth');
const Photo = require('../models/Photo');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});
const upload = multer({storage});


router.post('/', auth, upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(401).send({errors: {image: 'No image'}})
    }
    if (!req.body.title) {
        return res.status(401).send({errors: {title: 'No title'}})
    }

    const newPhoto = {
        userId: req.user._id,
        title: req.body.title,
        image: req.file.filename
    };

    const photo = new Photo(newPhoto);
    await photo.save();
    res.send({message: 'Added'})
});

router.get('/', async (req,res)=>{
   const gallery = await Photo.find().populate('userId');
   res.send(gallery);
});
router.get('/user_gallery', auth, async (req,res)=>{
    const galleryUser = await Photo.find({userId: req.user._id}).populate('userId');
    if (!galleryUser){
        res.status(401).send({error: 'No gallery'})
    }
    res.send(galleryUser)
});

router.get('/:id', async (req,res)=>{
   const gallery = await Photo.find({userId: req.params.id}).populate('userId');
   res.send(gallery);
});

router.delete('/:id', auth, async (req,res)=>{
    const user = req.user;
    const photo = await Photo.findOne({_id: req.params.id, userId: user._id});
    if (!photo){
        res.status(401).send({error: 'you do not have the right to delete someone else is photo'})
    }
    await Photo.deleteOne({userId: user._id, _id: req.params.id});
    res.send({message: 'Deleted'})
});

module.exports = router;