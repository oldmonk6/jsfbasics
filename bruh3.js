const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://jaideep:zoro123@cluster0.k8fa5vf.mongodb.net/user_app")
const User=mongoose.model('users',{name:String,email:String,password:String});
const user=new User({
    name:"harkirat singh",
    email:'harikirat@gmail.com',
    password:'123456'

});
user.save();