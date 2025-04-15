import React from 'react'
import { useSearchParams } from 'react-router-dom'

const UseSearchParam = () => {
    const [name,setName]=React.useState("")
    const [searchparam,setSearchparam]=useSearchParams()

const handleSubmit=(e)=>{
    e.preventDefault()
    setSearchparam({name:name})
  }

  return (
    <div>
      <form className='flex items-center justify-center'  onSubmit={handleSubmit}>
        <input type="text" value={name} className='border  mt-3 bg-gray-100' onChange={(e)=>{setName(e.target.value)}}/>
        <button type="submit" className='border rounded-md bg-gray-200 mt-3 ml-2'>Submit</button>
      </form>
    </div>
  )
}

export default UseSearchParam
