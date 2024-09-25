function sum(num1,num2,fntocall)
{
    const sum=num1+num2;
    fntocall(sum);
}
function display(data)
{
    console.log("result of the sum is:"+data );
}
const ans=sum(1,2,display);