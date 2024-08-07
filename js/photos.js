function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        str=``
        data.map((dt)=>{
            str+=`<div class="card">
            <h2>${dt.title}</h2>
            <img src="${dt.thumbnailUrl}" alt="" class="thm">
            <img src="${dt.url}" alt="" class="image">
            
            </div>`
        }) 
        document.getElementById("list").innerHTML=str   
    })
        .catch((error)=>{
            console.log(error)
            })
        
}