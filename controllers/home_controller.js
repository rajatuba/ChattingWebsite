//for displaying post
const Post=require('../models/post');
//for displaying users
const User=require('../models/user');

module.exports.home=async function(req,res){
    try{
        // populating the user of each post
        // populating post's comment and user of comment too
        let posts=await Post.find({})
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        });
        
        let users=await User.find({});

        return res.render('home',{
            title:'ChattingSite | Home',
            posts:posts,
            all_users:users
        });
    }catch(err){
        console.log('Error',err);
        return;
    }
}
//module.exports.actionName=function(req,res){}