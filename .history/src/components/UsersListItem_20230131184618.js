import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


function UsersListItem({ user }) {
  return (
    <div className='mb-2 mt-2 border rounded flex items-center'>
      <AiFillCloseCircle />
      <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
    </div>
  )
}

export default UsersListItem