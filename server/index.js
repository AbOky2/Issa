const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URL, port, ROOT_URL } = require('./config')
const routesApi = require('./routes')
const auth = require('./auth');
const logger = require('./logs');
const { jwtMiddleware } = require('./utils/jwt');
var path = require('path');

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
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    preflightContinue: false,
    credentials: true
}));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(jwtMiddleware);
auth({ app, ROOT_URL });
routesApi(app);

server.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
});