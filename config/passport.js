const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Admin = require('../models/adminModel');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (email, password, done) => {

        try {

            const userData = await Admin.findOne({ email: email });

            if (!userData) {
                return done(null, false);
            }

            const checkPassword = await bcrypt.compare(password, userData.pwd);

            if (!checkPassword) {
                return done(null, false);
            }

            return done(null, userData);

        } catch (err) {
            return done(err);
        }

    }
));

passport.serializeUser((userData, done) => {
    done(null, userData.id);
});

passport.deserializeUser(async (id, done) => {

    try {

        const singleUser = await Admin.findById(id);

        done(null, singleUser);

    } catch (err) {
        done(err);
    }

});

module.exports = passport;