import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import Button from './Button';


function UsersListItem({ user }) {
  return (
    <div className='mb-2 mt-2 border rounded flex items-center pl-4'>
      <Button>
        <GoTrashcan className='text-2xl hover:text-red-500 cursor-pointer ' />
      </Button>
      <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
    </div>
  )
}

export default UsersListItem