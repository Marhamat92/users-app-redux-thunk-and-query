import React, { useEffect, useState } from 'react'
import { fetchUsers, addUser } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from './Skeleton'
import Button from './Button'



function UsersList() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.users)
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const [loadingUsersError, setLoadingUsersError] = useState(null)
  // we deleted isLoading and error from destructring because we will use useState instead of isLoading and error which are isLoadingUsers and loadingUsersError

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleAddUser = () => {
    dispatch(addUser())
  }


  if (isLoadingUsers) {
    return <Skeleton className="h-10 w-full" times={10} />
  }

  if (loadingUsersError) {
    return <div>Error while fetching data..</div>
  }


  const renderedUsers = data.map((user) => {
    return (
      <div>
        <div key={user.id} className='mb-2 mt-2 border rounded'>
          <div className='flex p-2 justify-between items-center cursor-pointer' >{user.name}</div>
        </div>
      </div>
    )
  })


  return (

    <div>
      <div className='flex flex-row justify-between items-center mt-4' >
        <h1 className='text-2xl font-bold' >User List</h1>
        <Button onClick={handleAddUser} success>
          + Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList