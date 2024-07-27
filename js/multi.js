const input=document.getElementById("txt")
const button=document.getElementById("btn");

 document.getElementById("disp");
button.addEventListener('click',()=>{
    const value=input.value;
    // console.log(value);
    for(i=1;i<=10;i++)
    {
        
        disp="";
        disp+=i+"x"+value+"="+i*value;
        console.log(disp);
    }
})
