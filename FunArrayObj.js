import React,{useState} from 'react'
const FunArrayObj=()=>{
    const list=[{
        name:"Arjun",
        marks:100,
        id:1,
    }];
    const[item,setItem]=useState(list);
    return(
        <div>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>ID</th>

                </tr>
                {item.length>0 && item.map((ele)=>(
                    <tr key={ele.id}> 
                    <th>{ele.name}</th>
                   <th>{ele.id}</th>

               </tr>
                ))}
                
            </table>
            {item.map((ele)=>(
                <ol><li>{ele.name}</li></ol>))}
        </div>
    );
}
export default FunArrayObj;
