import React from 'react'
import { useSelector } from 'react-redux'

const Example = () => {
  const users = useSelector((s) => s.myUsers.users)
  const user = useSelector((s) => s.myUsers.user)
  return (
    <div>
      <h2>This is my example</h2>
      {users.map((el) => (
        <div>{el}</div>
      ))}
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  )
}

export default Example
