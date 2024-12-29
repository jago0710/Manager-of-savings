const mongoose = require('mongoose');

const URI = 'mongodb://localhost/registerdb';

mongoose.connect(
    URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
)