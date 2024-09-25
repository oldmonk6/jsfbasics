function findsum(n)
{
    let ans=0;
    for(let i=0;i<n;i++)
        {
            ans+=i;

        }
       return ans;
}
function callsum()
{
   console.log(findsum(100));

}
setTimeout(callsum,1000);
console.log("hello world");