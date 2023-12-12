import { useState } from "react";


function App() {
    
  const [data,setData] = useState("");
  const [collect,setCollect] = useState([]);
   



  function handleiput(e){
      
      setData(e.target.value) 
  }


  
    function handleonclick() {
        
      if(data != ""){
       const newarr = [...collect]
       newarr.push(data)
       setCollect(newarr)
     
       setData("");
      }
    }



    function deletefunc(index){
      const newarr = [...collect]
      newarr.splice(index,1)  
      setCollect(newarr)
    }
    


    function updatefunc(index){
      const newarr = [...collect]
      setData(newarr[index])

      if(data != newarr[index]){
        newarr.splice(index,1)
        newarr.splice(index,0,data)
        
        setCollect(newarr)
      }else {
        return;
      }

     //console.log(index)
       
    }
  
   
  return (
    <>
   <div className="todo-cont">
     <h1>TODO LIST</h1>
   </div>
   <div className="todo-input">
   <input type="text" placeholder="What you want to do" onChange={handleiput} value={data}></input>
   <button type="button" onClick={handleonclick}>click me</button>
   </div>
    
   <div className="ulstyle">
  <ul>
    {collect.map((value,index) => (
      <li key={index}>{value}<button className="ttf" onClick={() => deletefunc(index)}>delete</button><button onClick={() => updatefunc(index)} className="uptf-style">Update</button></li>
    ))}
  </ul>
    
    </div>
   </>
  );
  
}

export default App;
