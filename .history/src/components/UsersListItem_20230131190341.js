import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';


function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser)

  const handleRemoveUser = () => {
    doRemoveUser(user.id)
  }


  return (
    <div className='mb-2 mt-2 border rounded flex items-center pl-4'>
      <Button loading={isLoading} >
        <GoTrashcan className='text-2xl hover:text-red-500 cursor-pointer ' />
      </Button>
      <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
    </div>
  )
}

export default UsersListItem