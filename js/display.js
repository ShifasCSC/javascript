function displayEmployee(){
    let storedData=localStorage.getItem('empid',ob);
    if(storedData){
        let empData=JSON.parse(storedData);
       let table= document.getElementById("table");
       table.innerHTML="";
       
    }
}