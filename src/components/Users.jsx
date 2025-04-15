import React, { useContext } from 'react'
import UsersContext from '../hooks/UsersContext'
import User from './User'

const Users = () => {
  const { state } = useContext(UsersContext)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {state.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Users
