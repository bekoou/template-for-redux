import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
  const [newUser, setNewUser] = useState('')
  const users = useSelector((s) => s.myUsers.users)
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewUser(e.target.value)}
        value={newUser}
        className="bg-gray-200"
      />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'ADD_USER', user: newUser })
          setNewUser('')
        }}
      >
        Add
      </button>
      {users.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  )
}

export default Users
