import React from 'react'
import { useContext } from 'react'
import UsersContext from '../hooks/UsersContext'

const NewUser = () => {
  const [userName, setUserName] = React.useState('')
  const { state, dispatch } = useContext(UsersContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    
const newUser={
    id: state.users.length + 1,
    userName: userName,
}
    
    
    dispatch({ type: 'ADD_USER', payload: newUser })
    setUserName('')
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
        <input
          type="text"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          placeholder="Enter username"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  )
}

export default NewUser
