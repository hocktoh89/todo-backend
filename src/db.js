const mongoose = require('mongoose');
const envConfig = require('../env.config');
const dotenv = require('dotenv');

dotenv.config();

const uri = envConfig.getDBurl(process.env.ENV);

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

/**
 * Drop database and close the connection.
 */
 module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
}