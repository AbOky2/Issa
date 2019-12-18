const logger = require('../logs');
const User = require('../models/User');
const { RoleList } = require('../utils/user')
const { wrongInfo, notAuthorized } = require('../utils/message')
const propertieSchema = require('../middleware/schema')
const requestMiddleware = require('../middleware/request')
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
const deleteCollection = (listFn) =>
    [
        requestMiddleware(propertieSchema.delete, 'params'),
        handleErrors(async (req, res) => res.json(await listFn({ id: req.params.id })))
    ];

const listCollection = (listFn) =>
    [
        requestMiddleware(propertieSchema.list, 'query'),
        handleErrors(async (req, res) => {
            let { offset, limit } = req.query;

            offset = Number(offset) || undefined;
            limit = Number(limit) || undefined;

            res.json(await listFn({ offset, limit }));
        })
    ];

const authCheck = (role) => handleErrors((req, res, next) => {
    let authenticated = false,
        user = req.user,
        message = null;

    if (!user)
        message = notAuthorized;
    else if (role === '*' && !RoleList.includes(user.role))
        message = wrongInfo('role');
    else if (!role || (role !== '*' && (!RoleList.includes(role) || user.role !== role)))
        message = wrongInfo('role');

    if (message) {
        res.status(401).json({ authenticated, message });
    } else {
        next();
    }
});

module.exports = {
    handleErrors,
    listCollection,
    deleteCollection,
    authCheck,
};