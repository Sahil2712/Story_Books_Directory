const express = require('express');
const router=express.Router();
const passport = require('passport');

// @desc Auth with Google
// @route GET/auth/google
router.get('/google',passport.authenticate('google',{
  scope:['profile','email']
}))

// @desc Dashboard
// @route GET /auth/google/callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/dashboard');
  });

// @desc Lougout Userschema
// @route GET /auth/logout
router.get('/logout',function (req,res) {
  req.logout(),
  res.redirect('/')
})

module.exports=router;
