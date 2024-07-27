i=1;
function factorial()
{
    
var x=parseInt(document.getElementById("txt").value);
setTimeout(()=>{
    document.getElementById("btn");
    btn=document.getElementById("result")
    .textContent=`the factorial ${fact(x)}`;
},0);
}
function fact(x)
{
if(x==1||x==0)
{
    return 1;
}
else{
    return x*fact(x-1);
}
}