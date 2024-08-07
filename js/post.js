
//--------------- POST------------
function getData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{return res.json()})
    .then((datas)=>{console.log(datas);
        str=``
        datas.map((data)=>{
            str+=`<div class="card">
    <h4>ID=${data.id}</h4>
   <h3>Title:${data.title}</h3>
   <h2>Body:</h2>
   <p>${data.body}</p>
    </div>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{console.log(error);
    })
}
// ------------------POST END-----------------
