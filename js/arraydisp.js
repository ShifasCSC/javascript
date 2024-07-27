let task=[];
function addTask()
{
  txt.push(document.getElementById("txt").value);
  document.getElementById("txt").value="";
  displayTask;
}
function displayTask()
{
  str=``;
  for(i in task)
  {
    str+=`<li>${task[i]}<button onclick="deleteTask(${i})">delete</button></li>`;
  }
  document.getElementById("disp").innerHTML=str;
}
displayTask();

function deleteTask(index){
  console.log(index);
  txt.splice(index,1);
  displayTask();
}