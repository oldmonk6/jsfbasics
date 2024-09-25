const fs=require("fs");
function kiratreadfile()
{
    return new Promise(function(resolve)
{
    fs.readFile("a.txt","utf-8",function(err,data)
{
    console.log("async task");
    resolve(data);
});
})
}
function ondone(data)
{
    console.log(data);
}
kiratreadfile().then(ondone);


//chainig
const promisetwo=new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    let error=true;
    if(!error){
        resolve({username:"jaideep ",password:"123"});
    }
    else{
        reject('error:something went wrong');
    }
},1000);
});
promisetwo
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error)
{
    console.log(error);
});