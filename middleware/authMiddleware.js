module.exports.checkAuthentication = (req, res, next) => {

    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/login');
}

module.exports.checkLogin = (req, res, next) => {

    if (req.isAuthenticated()) {
        return res.redirect('/');
    }

    return next();
}