"use strict";

var Post = require('../models/post');

var Comment = require('../models/comment');

module.exports.create = function (req, res) {
  Post.create({
    content: req.body.content,
    user: req.user._id
  }, function (err, post) {
    if (err) {
      console.log('error in creating post');
      return;
    }

    return res.redirect('back');
  });
};

module.exports.destroy = function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    //id means converting _id into string
    if (err) {
      console.log(err);
      return;
    }

    if (post.user == req.user.id) {
      post.remove(); //deleting comment of post

      Comment.deleteMany({
        post: req.params.id
      }, function (err) {
        return res.redirect('back');
      });
    } else {
      return res.redirect('back');
    }
  });
};