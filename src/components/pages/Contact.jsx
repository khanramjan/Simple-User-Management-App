import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1 className='flex flex-col items-center font-bold text-3xl '>  Contact Page</h1>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam accusantium quibusdam, sunt porro voluptatum assumenda tempore? Excepturi facilis fugiat ad, maiores voluptate, sit in illo beatae voluptatibus fugit, neque nobis?</p>
        <button className='border font-serif bg-gray-200 my-2 px-2 rounded-md' onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Contact
