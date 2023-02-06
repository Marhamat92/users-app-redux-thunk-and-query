import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


function UsersListItem({ user }) {
  return (
    <div className='mb-2 mt-2 border rounded flex items-center pl-4'>
      <AiFillCloseCircle className='text-xl hover:text-red-500 cursor-pointer' />
      <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
    </div>
  )
}

export default UsersListItem