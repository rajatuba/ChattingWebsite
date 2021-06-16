//importing user model
const User=require('../models/user');

module.exports.profile=function(req,res){
    User.findById(req.params.id,function(err,user){
        res.render('user_profile',{
            title:'Profile',
            profile_user:user
        });
    });
}

//render sign up page
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    
    return res.render('user_sign_up',{
        title: "ChattingSite | Sign Up"
    });
}

//render sign in page
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

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

//Sign in and create a session for user
module.exports.createSession=function(req,res){
    return res.redirect('/');
}

//Signing out
//log out of passport.js
module.exports.destrySession=function(req,res){
    req.logOut();
    return res.redirect('/');
}
