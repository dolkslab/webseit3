const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
    callbackURL: 'http://webseit3.dolkslab.repl.co/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  },(accessToken, refreshToken, profile, done)=>{
    //callback
    console.log('callback triggered');
    console.log(profile);
    })
)
