"use strict";

//for displaying post
var Post = require('../models/post'); //for displaying users


var User = require('../models/user');

module.exports.home = function (req, res) {
  // populating the user of each post
  // populating post's comment and user of comment too
  Post.find({}).populate('user').populate({
    path: 'comments',
    populate: {
      path: 'user'
    }
  }).exec(function (err, posts) {
    User.find({}, function (err, users) {
      return res.render('home', {
        title: 'ChattingSite | Home',
        posts: posts,
        all_users: users
      });
    });
  });
}; //module.exports.actionName=function(req,res){}