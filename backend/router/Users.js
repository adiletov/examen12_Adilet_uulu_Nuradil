const express = require('express');
const router = express.Router();


const bcrypt = require('bcrypt');
const axios = require('axios');
const {nanoid} = require('nanoid');

const User = require('../models/User');
const config = require('../config');

router.post('/', async (req, res) => {
    const username = await User.findOne({username: req.body.username});
    if (username) {
        return res.status(401).send({errors: {username: {message: 'This user is already registered'}}})
    }
    const newUser = {
        fullName: req.body.fullName,
        username: req.body.username,
        password: req.body.password
    };
    const user = new User(newUser);
    try {
        await user.generationToken();
        await user.save();
        res.send({message: 'Successful registration', user})
    } catch (e) {
        res.status(401).send(e)
    }
});

router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
        return res.status(401).send({error: 'Username or password in correct!'})
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(401).send({error: 'Username or password in correct!'})
    }
    await user.generationToken();
    await user.save();
    res.send({message: 'Successful login', user})
});


router.post('/facebook', async (req, res) => {
    const inputToken = req.body.accessToken;
    const accessToken = config.facebook.appId + '|' + config.facebook.appSecret;
    const debugTokenUrl = `https://graph.facebook.com/debug_token?input_token=${inputToken}&access_token=${accessToken}`;

    try {
        const response = await axios.get(debugTokenUrl);
        if (response.data.data.error) {
            return res.status(401).send({message: 'Facebook token incorrect'});
        }
        if (req.body.id !== response.data.data.user_id) {
            return res.status(401).send({message: 'Wrong user ID'});
        }

        let user = await User.findOne({facebookId: req.body.id});
        if (!user) {
            const newUser = {
                fullName: req.body.name,
                username: req.body.id,
                password: nanoid(),
                facebookId: req.body.id
            };
            user = new User(newUser);
        }
        await user.generationToken();
        await user.save();
        res.send({message: 'Logged in with Facebook', user})
    } catch (e) {
        res.status(404).send({error: 'Not found!'})
    }
});

router.delete('/sessions', async (req, res) => {
    const success = {message: 'Bye'};

    const token = req.get('Authorization');
    if (!token) return res.send(success);
    const user = await User.findOne({token});
    if (!user) return res.send(success);

    user.generationToken();
    await user.save();
    res.send(success);
});


module.exports = router;