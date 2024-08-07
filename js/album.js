function submit(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>{return res.json()})
    .then((datas)=>{console.log(datas);
        str=``
        datas.map((data)=>{
            str+=` <div class="card">
            <h2>id:${data.id}</h2>
            <h3>Title:${data.title}</h3>
            
        </div>`
        })
        document.getElementById("main").innerHTML=str
    })
    .catch((error)=>{console.log(error);
    })
}