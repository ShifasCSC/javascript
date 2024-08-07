function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        str=``
        data.map((data)=>{
            str+=`<div class="card">
            <h3>${data.username}</h3>
            <h4>${data.email}</h4>
            <h2>${data.name}</h2>
            <h4>${data.address.street}</h4>
            <h4>${data.address.suite}</h4>
            <h4>${data.address.city}</h4>
            <h4>${data.address.zipcode}</h4>
            <h4>${data.address.geo.lat}</h4>
            <h4>${data.address.geo.lng}</h4>
            
            </div>`
        }) 
        document.getElementById("list").innerHTML=str   
    })
        .catch((error)=>{
            console.log(error)
            })
        
}