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