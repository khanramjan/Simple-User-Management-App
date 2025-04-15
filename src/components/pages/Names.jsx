import React, { useContext } from 'react'
import UsersContext from '../../hooks/UsersContext'

const Names = () => {
  const { state, dispatch } = useContext(UsersContext)

  return (
    <div>
      {state.users.map((name) => (
        <div key={name.id}>
          <ol className='flex item-center list-disc'>
            <li className='ml-10'><h1>{name.userName}</h1></li>
          </ol>
        </div>
      ))}
    </div>
  )
}

export default Names
