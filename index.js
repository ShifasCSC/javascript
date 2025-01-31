const input=document.getElementById("txt")
const list=document.getElementById("list")

function addTask(){
    if(input.value.trim() ===""){
        alert("please enter a task")
        return;
    }
    createTaskElement(input.value);
    saveData()
    input.value="";

}
function createTaskElement(taskText){
    let li=document.createElement("li")
    li.innerHTML=`${taskText}<button class="del">x</button>`;
    list.appendChild(li)
}

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function displayData(){
    list.innerHTML=localStorage.getItem("data")||"";

}

list.addEventListener("click",function(e){
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
        saveData()
    }
})

document.addEventListener("DOMContentLoaded",displayData);


//my own errored code to compare the above chat gpt code
/*const input=document.getElementById('txt');
const list=document.getElementById('list');
 function addTask(){
    if(input.value.trim()===''){
        alert("please enter the text")
    }else{
        let li= document.createElement("li");
        li.innerText=input.value;
        
        //to set an delete btn
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent="x"
         deleteBtn.style.marginLeft="20px"
         deleteBtn.onclick= function(){
            list.removeChild(li)
            saveData()
        }
        li.appendChild(deleteBtn)
        list.appendChild(li);  
        input.value="";
        saveData()
    }
    function saveData(){
    localStorage.setItem("data",list.innerHTML)
    
}
function displayData(){
     list.innerHTML= localStorage.getItem("data")||"";

    }
    
}
*/