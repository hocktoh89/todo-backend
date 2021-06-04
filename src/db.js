const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_URL;

/**
 * Mongodb database connection.
 */
 module.exports.connect = async () => {
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10
    };

    await mongoose.connect(uri, mongooseOpts);
}