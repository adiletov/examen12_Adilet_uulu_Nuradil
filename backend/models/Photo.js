const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true
    }
});

const Photo = mongoose.model('Photo', newSchema);
module.exports = Photo;