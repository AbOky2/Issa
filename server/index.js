const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const server = require('http').createServer(app);
const mongoSessionStore = require('connect-mongo');
const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URL, port, ROOT_URL } = require('./config')
const routesApi = require('./routes')
const googleAuth = require('./auth/google');
const logger = require('./logs');


(async () => {
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(MONGO_URL, options)

    } catch (err) {
        logger.error(err.message);
        process.exit(1);
    }
})()

app.use(passport.initialize());
app.use(passport.session());
googleAuth({ app, ROOT_URL });
routesApi(app);

server.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
});