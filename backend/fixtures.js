const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require('nanoid');
const User = require('./models/User');
const Photo = require('./models/Photo');

const run = async () => {
    await mongoose.connect(config.database, config.options);

    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }


    const users = await User.create(
        {
            fullName: 'Roy Tims',
            username: 'user1',
            password: 'user123',
            token: nanoid(),
        },
        {
            fullName: 'John Doe',
            username: 'user2',
            password: 'user123',
            token: nanoid(),
        }
    );

    await Photo.create(
        {
            title: 'Luna',
            userId: users[1]._id,
            image: 'luna.jpeg'
        },{
            title: 'Sun or Luna',
            userId: users[0]._id,
            image: 'sunOrLuna.jpeg'
        },{
            title: 'Nike',
            userId: users[1]._id,
            image: 'nike.jpeg'
        },{
            title: 'Wolf',
            userId: users[0]._id,
            image: 'wolf.jpeg'
        },{
            title: 'Strah',
            userId: users[1]._id,
            image: 'strah.jpeg'
        },{
            title: 'Raketa',
            userId: users[1]._id,
            image: 'raketa.jpeg'
        },{
            title: 'Cat',
            userId: users[0]._id,
            image: 'cat.jpeg'
        },
        {
            title: 'Car',
            userId: users[0]._id,
            image: 'car.jpeg'
        },
        );

    await connection.close();
};


run().catch(error => {
    console.error('Something went wrong');
});