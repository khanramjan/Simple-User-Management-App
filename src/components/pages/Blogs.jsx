import React from "react";
import { blogdata } from "./blogdata";
import { useState } from "react";
import { Link } from "react-router-dom";


const Blogs = () => {
    const [Data]=useState(blogdata);
    const truncate =(str,n)=>{
        return str.length>n?str.substr(0,n-1)+".....":str;
    }
  return (
    <div>
     {Data.map(data=>{
      const {id,title,content}=data;
      return(
        <div key={data.id} className="bg-gray-200 p-4 m-4 rounded-lg shadow-md">
            <h1 className="font-semibold text-lgl font-serif mb-1">{title}</h1>
            <p className="mb-2">{truncate(data.content,100)}</p>
            <Link to={title} state={data.content}>Load More</Link>
        </div>

      )  
        
     })}
    </div>
  )
}

export default Blogs
