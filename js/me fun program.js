// function clickme(){
//     let tag=document.createElement("h1")
//     tag.textContent="hello"
//     document.getElementById("id").appendChild(tag)
// }
function clickme()
{
    let num=parseInt(document.getElementById('sqr').value)
    document.getElementById("result").textContent=`square is=${num**2}`
}