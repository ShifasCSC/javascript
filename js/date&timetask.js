function timer()
{
    let date=new Date();
    hours=date.getHours();
    ampm=hours<12?"AM":"PM"
     document.getElementById("timer").textContent=`${putZero(hours%2)}-${putZero(date.getMinutes())}-${putZero(date.getSeconds())}-${ampm}`
    setTimeout(() => { //----------recursive function
        timer()
    }, 1000);
}

timer()

 function putZero(time){
    return time<10?"0"+time:time;
}
 function date()
{    let date=new Date();
   day=date.getDay();
    month=date.getMonth();
   year=date.getFullYear();
   document.getElementById("dates").textContent=
}
 