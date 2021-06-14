//importing user model
const User=require('../models/user');

module.exports.profile=function(req,res){
    res.render('user_profile',{
        title:'Profile'
    });
}

//render sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: "ChattingSite | Sign Up"
    });
}

//render sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"ChattingSite | Sign In"
    });
}

//get the sign up data
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}

//sign in and create a session for user
//Manual Authentication
module.exports.createSession=function(req,res){
    //steps to authenticate

    //find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing in');
            return;
        }

        //handle user find
        if(user){
            //handle password which doesn't match
            if(user.password!=req.body.password){
                return res.redirect('back');
            }

            //handle session creation
            res.cookie('user_id',user._id);
            return res.redirect('/users/profile');
        }else{
            //handle user not found
            return res.redirect('back');
        }
    });
}