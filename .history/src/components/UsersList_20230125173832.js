import React from 'react'
import { useSelector } from 'react-redux'


function UsersList() {
  const users = useSelector(state => state.users)
  console.log(users)

  return (
    <div>UsersList</div>
  )
}

export default UsersList