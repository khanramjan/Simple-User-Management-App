import React from 'react'
import { useEffect } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { blogdata } from './blogdata'

const Blog = () => {

    const {title} = useParams()
    const location = useLocation()
    // const [content,setContent]=React.useState("")
    // useEffect(()=>{
    //   blogdata.map(data=>{
    //     if(data.title===title){
    //       setContent(data.content)
    //     }
    //   })},[title])
    
  return (
    <div>
      <h1>{title}</h1>
      <h1>{location.state}</h1>
    </div>
  )
}

export default Blog
