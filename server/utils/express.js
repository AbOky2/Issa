const logger = require('../logs');
const User = require('../models/User');

/**
 * Creates a middleware that tries to execute a function
 * and catch eventual errors to send them as a json response
 * @param {(req: Request, res: Response) => any} fn
 * @returns {(res: Request, res: Response) => Promise<any>}
 */
const handleErrors = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        logger.error(err);
        res.status(400).json({ error: err.message || err.Message || err.toString() });
    }
};

/**
 * Creates a middleware that extract listing parameters,
 * pass them to a listing function and return the result
 * as a json response
 * @param {(req: Request, res: Response) => any} listFn
 */
const listCollection = (listFn) =>
    handleErrors(async (req, res) => {
        let { offset, limit } = req.query;

        offset = Number(offset) || undefined;
        limit = Number(limit) || undefined;

        res.json(await listFn({ offset, limit }));
    });

const storeSignUpInfos = handleErrors((req, res, next) => {
    const { firstName, lastName, birthday, postalCode, centersOfInterest } = req.query;
    console.log("AAA");
    if (firstName || lastName || birthday || postalCode || centersOfInterest) {
        console.log("BBB");
        req.session.signUpInfos = {
            firstName,
            lastName,
            birthday,
            postalCode,
            centersOfInterest: Array.isArray(centersOfInterest) ? centersOfInterest : [centersOfInterest],
        };
    }
    console.log("CCC");
    next();
});

const consumeSignUpInfos = handleErrors(async (req, res, next) => {
    if (req.session.signUpInfos) {
        const { firstName, lastName, birthday, postalCode, centersOfInterest } = req.session.signUpInfos;
        // const { user } = await User.updateBySlug({
        //     slug: req.user.slug,
        //     firstName, lastName,
        //     dateOfBirth: birthday,
        //     postalCode,
        //     influencer: {
        //         centersOfInterest
        //     }
        // });
        // req.user = user;
        // delete req.session.signUpInfos;
        console.log('Consume Signup')
    }
    next();
});

const authCheck = handleErrors((req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            authenticated: false,
            message: "User has not been authenticated"
        });
    } else {
        next();
    }
});

module.exports = {
    handleErrors,
    listCollection,
    storeSignUpInfos,
    consumeSignUpInfos,
    authCheck,
};