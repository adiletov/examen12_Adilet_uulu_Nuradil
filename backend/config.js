const path = require('path');

const rootPath = __dirname;

module.exports = {
    database: 'mongodb://localhost/photoGallery',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    rootPath,
    uploadPath: path.join(rootPath, '/public/uploads/')
};