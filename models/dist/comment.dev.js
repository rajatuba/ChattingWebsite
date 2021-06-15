"use strict";

var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  //comment belongs to user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
}, {
  timestamps: true
});
var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;