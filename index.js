const express=require('express');

//Cookie
const cookieParser=require('cookie-parser');

const app=express();
const port=8000;

//for creating layouts
const expressLayouts=require('express-ejs-layouts');

//database
const db=require('./config/mongoose');

//used for cookie session
const session=require('express-session');
//passport
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

//Cookie - encode and decode
app.use(express.urlencoded());
app.use(cookieParser());

//setting up static files
app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and script from sub-pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//setting up session
app.use(session({
    name: 'chattingsite',
    secret: 'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

//intializing passport and session
app.use(passport.initialize());
app.use(passport.session());

//Authenticated user
app.use(passport.setAuthenticatedUser);

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port} `);
});