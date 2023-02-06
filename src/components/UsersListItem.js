import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';


function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser)

  const handleRemoveUser = () => {
    doRemoveUser(user)
  }

  const header = <>
    <Button onClick={handleRemoveUser} loading={isLoading} >
      <GoTrashcan className='text-2xl hover:text-red-500 cursor-pointer ' />
    </Button>
    <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
  </>

  return (<ExpandablePanel header={header} >
    <AlbumsList user={user} />
  </ExpandablePanel>
  )
}

export default UsersListItem