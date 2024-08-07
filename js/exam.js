function sub(){
    x=document.getElementById("txt").value
    str=``
    for(i=1;i<=x;i++)
    {
        str+=`<li>${i}</li>`
    }
    document.getElementById('data').innerHTML=str
}