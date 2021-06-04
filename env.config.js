const dotenv = require('dotenv');

dotenv.config();

const testDBuri = process.env.TEST_DB_URL;
const dBuri = process.env.DB_URL;

function getDBurl(env) {
    switch (env) {
        case 'test':
        return testDBuri;

        default:
        return dBuri;
    }
}

module.exports = {
    getDBurl
}