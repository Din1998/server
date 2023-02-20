const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const CLIENT_ID = '453925046701-iurrso5tu0resnbe0ef5mm7areonrps0.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});