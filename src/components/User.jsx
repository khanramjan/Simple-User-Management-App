import React from 'react'
import { useContext } from 'react'
import UsersContext from '../hooks/UsersContext'

const User = ({ user }) => {
  const { dispatch } = useContext(UsersContext)
  const { id, userName } = user
  return (
    <div className="bg-blue-300 p-4 rounded-lg shadow-md mb-4  hover:bg-blue-200 transition-colors">
      <div>
        <div>
          <p className="text-gray-600 text-sm font-bold">ID: {id}</p>
          <h2 className="text-lg font-semibold text-gray-800">
            Username: {userName}
          </h2>
          <button
            onClick={() => dispatch({ type: 'DELETE_USER', payload: id })}
          >
            <p className="text-white bg-red-600 px-2 py-1 mt-2 rounded-md  hover:text-black transition-colors">
              Delete
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default User
