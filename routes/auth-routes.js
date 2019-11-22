const router = require('express').Router();
const passport = require('passport');

//auth with google
router.get('/logout',(req, res) => {
  res.send('unlogghen met je fingerprint');
  //passport
});

//auth logout 
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

//callback route voor google om naar te redirecten
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('ik heb adis');
  console.log("nigger");
});


module.exports = router;