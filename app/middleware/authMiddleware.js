var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var exports = module.exports = {}

exports.adminAuth = function () {
    return [
        ensureLoggedIn('/login'),
        function (req, res, next) {
            if (req.user && req.user.useMode === 'admin')
                next();
            else
                res.send(401, 'Unauthorized');
        }
    ]
};

exports.teacherAuth = function () {
    return [
        ensureLoggedIn('/login'),
        function (req, res, next) {
            if (req.user && req.user.useMode === 'admin')
                next();
            else
                res.send(401, 'Unauthorized');
        }
    ]
};

exports.parentAuth = function () {
    return [
        ensureLoggedIn('/login'),
        function (req, res, next) {
            if (req.user && req.user.useMode === 'admin')
                next();
            else
                res.send(401, 'Unauthorized');
        }
    ]
};

exports.studentAuth = function () {
    return [
        ensureLoggedIn('/login'),
        function (req, res, next) {
            if (req.user && req.user.useMode === 'admin')
                next();
            else
                res.send(401, 'Unauthorized');
        }
    ]
};