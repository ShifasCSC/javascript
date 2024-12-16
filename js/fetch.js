async function productfetch()
{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(res);
        

    }
    catch(error){
  console.log(error);
  
    }
}
productfetch()