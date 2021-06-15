//for displaying post
const Post=require('../models/post');

module.exports.home=function(req,res){
    // populating the user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title:'ChattingSite | Home',
            posts:posts
        });
    });
}

//module.exports.actionName=function(req,res){}