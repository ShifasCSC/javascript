function submit(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{return res.json()})
    .then((datas)=>{console.log(datas);
        str=``
        datas.map((data)=>{
            str+=` <div class="card">
      <h5>Name: ${data.name}</h5>
      <h5>Email: ${data.email}</h5>
      <h4>Body</h4>
      <p>${data.body}</p>  
    </div>`
        })
        document.getElementById("list").innerHTML=str

    })
    .catch((error)=>{console.log(error);
    })
}