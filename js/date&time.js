function timer()
{
    let date=new Date();
    hours=date.getHours();
    ampm=hours<12?"AM":"PM"
    // dig=hours%12?"12":"1"
    document.getElementById("timer").textContent=`${putZero(hours%12)}-${putZero(date.getMinutes())}-${putZero(date.getSeconds())}-${ampm}`
    setTimeout(() => {
    timer()
    },1000);
}
timer();
function putZero(time){
  return time<10?"0"+time:time;
}

function dates(){
    let week=new Date();
    day=week.getDay();
    month=week.getMonth();
    year=week.getFullYear();
    document.getElementById("dates").textContent=`${put(week.getDay())}-${put(week.getMonth(month+1))}-${put(week.getFullYear())}`
    setTimeout(() => {
     dates()
    },3600000);
}
dates();
function put(date){
  return date<10?"0"+date:date
}

function changeBackground() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
  
    if (hours >= 6 && hours < 19) { 
      document.body.style.backgroundImage = 'url(images/beautiful-tropical-beach-sea-with-coconut-palm-tree-paradise-island.jpg)';
    } else { 
      document.body.style.backgroundImage = 'url(images/beautiful-photorealistic-moon.jpg)';
    }
  }
  setInterval(changeBackground, 3600000); 
  
  changeBackground();